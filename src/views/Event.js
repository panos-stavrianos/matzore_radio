import React, {Component} from "react";

import IndexNavbar from "../components/Navbars/IndexNavbar";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import IndexFooter from "../components/Footers/IndexFooter";
import {Col, Container, Row} from "reactstrap";
import GoogleMapReact from 'google-map-react';
import Moment from "react-moment";
import marked from "marked";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";

const renderMarkers = (map, maps, lat, lng) => {
    let marker = new maps.Marker({
        position: {lat: lat, lng: lng},
        map,
        title: 'Hello World!'
    });
    return marker;
};


function DescriptionMD({description}) {
    console.log(description)
    return (
        <p dangerouslySetInnerHTML={{__html: marked(description)}}/>
    )
}

function GMapReact({center}) {
    let defaultProps = {
        center: {lat: 35.3641978, lng: 24.4777767},
        zoom: 15,
    };

    return (
        <div style={{height: '35vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBWGv5gzLoXbCnknnoa0V0MOMfBwcUtpik'}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                center={center}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps, center.lat, center.lng)}>
            </GoogleMapReact>
        </div>
    )
}


function TagsList({tags}) {
    if (tags && tags.length) {
        return (
            <div><h5>
                {tags.map((tag, i) => (
                    <span key={i} className="badge badge-primary text-lowercase m-1">
                        <a className='text-light' href={'/tag/' + tag.id} title="Δείτε περισσότερα">{tag.name}</a>
                    </span>
                ))}
            </h5></div>
        );
    } else
        return (<br/>)
}


class Event extends Component {
    state = {
        event: {
            'title': '',
            'body': '',
            'cover': require("assets/img/matzore_logo_192.png"),
            'event_date': '',
            'location': '',
            'coordinates': '',
            'tags': []
        },
        center: {lat: 35.3641978, lng: 24.4777767},
        zoom: 11,
        meta: get_default_meta()
    };

    componentDidMount() {
        const {match: {params}} = this.props;
        fetch('https://matzore-shows.herokuapp.com/api/get_event/' + params.id)
            .then(res => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                data.event.cover = data.event.cover ? data.event.cover : require("assets/img/matzore_logo_192.png");
                this.setState({
                    event: data.event,
                    center: {lat: parseFloat(data.event.coordinates[0]), lng: parseFloat(data.event.coordinates[1])},
                    meta: get_default_meta({
                        title: data.event.title,
                        description: data.event.short_description,
                        type: 'article',
                        image: data.event.cover
                    })
                });
            })
            .catch(console.log);
    }

    render() {
        return (
            <DocumentMeta {...this.state.meta}>
                <IndexNavbar/>
                <IndexHeader/>
                <div className="section profile-content">
                    <Container>
                        <div className="owner">
                            <div className="avatar">
                                <img
                                    alt="..."
                                    className="img-circle img-no-padding img-responsive border-white-5"
                                    src={this.state.event.cover}
                                />
                            </div>
                            <div className="name">
                                <h4 className="title m-0">
                                    {this.state.event.title} <br/>
                                </h4>
                                <Col className="ml-auto mr-auto text-center">
                                    <TagsList tags={this.state.event.tags}/>
                                </Col>
                                <h5>
                                    Τοποθεσία:<span className='m-1'
                                                    style={{fontWeight: 'bold'}}>{this.state.event.location}</span>
                                    <br/>
                                    Ημ/Ώρα:
                                    <span>
                                        <Moment className='m-1' style={{fontWeight: 'bold'}}
                                                format="DD/MM/YYYY  HH:mm">{this.state.event.event_date}</Moment>
                                    </span>
                                </h5>
                            </div>

                        </div>
                        <div style={{width: "100%", height: "100%"}}>
                            <GMapReact center={this.state.center}/>
                        </div>
                        <Row>
                            <Col className="ml-auto mr-auto text-left" md="12">
                                <DescriptionMD description={this.state.event.body}/>
                            </Col>
                        </Row>

                        <br/>
                    </Container>
                </div>
                <IndexFooter/>
            </DocumentMeta>
        )
    }
}

export default Event;
