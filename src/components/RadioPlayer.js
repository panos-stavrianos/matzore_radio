import React, {useState} from 'react';
import $ from 'jquery';
import {soundManager} from "soundmanager2/script/soundmanager2-nodebug-jsmin"
import autobahn from "autobahn"
import "./../assets/css/radio_player.css"

const default_cover = 'https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
const isObjectEmpty = obj => Object.values(obj).every(val => typeof val === "undefined")


function set_image(meta_url) {
    if (meta_url === "") {
        $('#cover').css('background-image', `url(${default_cover})`);
        return
    }
    let image_url = 'https://coverartarchive.org' + meta_url.replace(/^.*\/\/[^/]+/, '');
    $.ajax({
        url: image_url,
        type: 'GET',
        success: function (data) {
            if (data.images && data.images.length) {
                $('#cover').css('background-image', 'url(' + data.images[0].image + ')');
            } else
                $('#cover').css('background-image', `url(${default_cover})`);
        },
        error: function (data) {
            console.log("no cover");

            $('#cover').css('background-image', `url(${default_cover})`);
        }
    });
}

function start_autobahn() {

    function set_meta_autopilot(data) {
        let metadata = $.parseJSON(data);
        if (metadata.songTitle && metadata.artist) {
            $('.radio_title').html(metadata.songTitle);
            $('.radio_artist').html(metadata.artist);
            $('.radio_album').html(`<a class="album" href=${metadata.metadata_url}>${metadata.albumTitle}</a> <br/>`);
            set_image(metadata.metadata_url)
        }
    }

    function set_meta_show(data) {
        $('.radio_title').html("Show on air");
        $('.radio_artist').html(data.message);
        $('.radio_album').html(`<a class="album" href=/show/${data.show_id} target="_blank">${data.name}</a> <br/>`);
        if (data.cover)
            $('#cover').css('background-image', `url(${data.cover})`);
        else
            $('#cover').css('background-image', `url(${default_cover})`);

    }

    function set_meta(data_autopilot) {
        $.getJSON('https://matzore-shows.herokuapp.com/api/get_show_playing', (data_show) => {
            if (data_show && !isObjectEmpty(data_show))
                set_meta_show(data_show);
            else
                set_meta_autopilot(data_autopilot)
        }).fail(() => {
            set_meta_autopilot(data_autopilot)
        });

    }

    const connection = new autobahn.Connection({
        url: window.location.protocol === "http:" ? 'ws://83.212.124.250:8081/ws' : 'wss://83.212.124.250:8081/ws',
        realm: 'metadata-realm',
        authid: "anonymous"
    });
    connection.onopen = function (session) {
        // 1) subscribe to a topic
        function onevent(args) {
            set_meta(args[0]);
        }

        session.subscribe('com.metadata.client.metadata_event', onevent).then(
            function (sub) {
                session.call('wamp.subscription.get_events', [sub.id, 1]).then(
                    function (history) {
                        set_meta(history[0].args[0]);
                    },
                    function (err) {
                        console.log("could not retrieve event history", err);
                    }
                );
            },
            function (err) {
                console.log("could not subscribe", err);
            }
        );

    };
    connection.open();
}

let sound = null;


function play_btn() {
    if (sound.playState !== 0) {
        sound.stop();
        sound.unload();
    } else {
        sound.load();
        sound.play();

    }
}


function RadioPlayer() {
    const [music_card_playing, set_music_card_playing] = useState({'music_card': 'music-card', 'play_btn': 'play'});

    function set_icon(action) {
        switch (action) {
            case -1://stopped
                set_music_card_playing({'music_card': 'music-card', 'play_btn': 'play'});
                break;
            case 0://playing
                set_music_card_playing({'music_card': 'music-card playing', 'play_btn': 'pause'});
                break;
            case 1://loading
                set_music_card_playing({'music_card': 'music-card', 'play_btn': 'loader'});
                break;
            default:
                set_music_card_playing({'music_card': 'music-card', 'play_btn': 'play'});
                break;
        }
    }


    soundManager.onready(function () {
        sound = soundManager.createSound({
            useFastPolling: true,
            useHighPerformance: true,
            id: 'Radio',
            url: ['http://rs.radio.uoc.gr:8000/matzore_64.ogg', 'http://rs.radio.uoc.gr:8000/matzore_64.mp3'],
            bufferTime: 9,
            onstop: function () {
                set_icon(-1, set_music_card_playing)
            },
            onbufferchange: function (action) {
                set_icon(action, set_music_card_playing);
            }
        });
    });


    start_autobahn();

    return (
        <div className='radio_player z99'>
            <div className={music_card_playing.music_card}>
                <div id='cover' className='image'/>
                <div className='radio_info'>
                    <h2 className='radio_title'>&nbsp;</h2>
                    <div className='radio_artist'/>
                    <div className="radio_album"/>
                </div>
                <div className='wave'/>
                <div className='wave'/>
                <div className='wave'/>
            </div>
            <div id="play_btn">
                <div id="player_icon" onClick={play_btn} className={music_card_playing.play_btn}/>
            </div>
        </div>

    );
}

export default RadioPlayer;
