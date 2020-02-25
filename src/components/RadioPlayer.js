import React, {useState} from 'react';
import $ from 'jquery';
import {soundManager} from "soundmanager2"
import autobahn from "autobahn"
import "./../assets/css/radio_player.css"


function set_image(meta_url) {
    if (meta_url === "") {
        $('#cover').css('background-image', 'url(https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)');
        return
    }
    let image_url = 'https://coverartarchive.org' + meta_url.replace(/^.*\/\/[^/]+/, '');
    $.ajax({
        url: image_url,
        type: 'GET',
        success: function (data) {
            console.log(data.images);
            if (data.images.length > 0) {
                console.log(data.images[0].image);
                $('#cover').css('background-image', 'url(' + data.images[0].image + ')');
            } else
                $('#cover').css('background-image', 'url(https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)');
        },
        error: function (data) {
            console.log("no cover");

            $('#cover').css('background-image', 'url(https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)');
        }
    }).then(r => console.log(r));
}

function start_autobahn() {

    const connection = new autobahn.Connection({
        url: window.location.protocol === "http:" ? 'ws://83.212.124.250:8081/ws' : 'wss://83.212.124.250:8081/ws',
        realm: 'metadata-realm',
        authid: "anonymous"
    });
    connection.onopen = function (session) {
        // 1) subscribe to a topic
        function onevent(args) {
            console.log("Event:", args[0]);
            let metadata = $.parseJSON(args[0]);
            if (metadata.songTitle && metadata.artist) {
                $('.radio_title').html(metadata.songTitle);
                $('.radio_artist').html(metadata.artist);
                $('.radio_album').html('<a class="album" href=' + metadata.metadata_url + ' target="_blank">' + metadata.albumTitle + '</a> <br/>');
                set_image(metadata.metadata_url)
            }
        }

        session.subscribe('com.metadata.client.metadata_event', onevent).then(
            function (sub) {
                console.log("subscribed with subscription ID " + sub.id);
                session.call('wamp.subscription.get_events', [sub.id, 1]).then(
                    function (history) {
                        let metadata = $.parseJSON(history[0].args[0]);
                        console.log(metadata);
                        if (metadata.songTitle && metadata.artist) {
                            $('.radio_title').html(metadata.songTitle);
                            $('.radio_artist').html(metadata.artist);
                            $('.radio_album').html('<a class="album" href=' + metadata.metadata_url + ' target="_blank">' + metadata.albumTitle + '</a> <br/>');
                            set_image(metadata.metadata_url)
                        }
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
            id: 'Radio',
            url: 'http://rs.radio.uoc.gr:8000/matzore_64.mp3',
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
