import React, {Component} from "react";
import "assets/css/social_bar.css";
import {Col, Container, Row} from "reactstrap";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";
import GoogleMapReact from "google-map-react";

const renderMarkers = (map, maps, lat, lng) => {
    let marker = new maps.Marker({
        position: {lat: lat, lng: lng},
        map,
        title: ''
    });
    return marker;
};

function GMapReact() {
    let defaultProps = {
        center: {lat: 35.352044, lng: 24.449913},
        zoom: 16,
    };

    return (
        <div style={{height: '35vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBWGv5gzLoXbCnknnoa0V0MOMfBwcUtpik'}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                center={defaultProps.center}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps, defaultProps.center.lat, defaultProps.center.lng)}>
            </GoogleMapReact>
        </div>
    )
}

class AboutUs extends Component {

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'AboutUs'})}>
                {window.dispatchEvent(new CustomEvent('new_page'))}
                <div className="main">
                    <div className="section text-center">
                        <Container>
                            <Row>
                                <Col className="ml-auto mr-auto" md="8">
                                    <h2 className="title text-left">About Us</h2>
                                    <h5 className="description text-left">
                                        Η «φωνή» του Πανεπιστημίου Κρήτης (Ρέθυμνο) είναι εδώ!
                                        <br/>
                                        Μια φωνή που εκφράζεται
                                        μουσικά,
                                        προφορικά ή γραπτά για ό,τι την αφορά, για ό,τι την απασχολεί και για ό,τι την
                                        εμπνέει.
                                        <br/>
                                        <span className='font-weight-bold'>ΜατζόΡε</span> είναι ο ραδιοφωνικός σταθμός
                                        που πατά σε φοιτητικό έδαφος και κοιτά προς
                                        πάσα
                                        κατεύθυνση.
                                        <br/>
                                        Οι ευρύτεροι στόχοι: η κριτική, ο πολιτισμός, ο διάλογος, η εξ
                                        αποστάσεως παρέα με
                                        τον ακροατή.
                                        <br/>
                                        Η αγάπη για το ράδιο μας φέρνει όλους κοντά και η ανάγκη για
                                        έκφραση μας ενώνει.
                                        <br/>
                                        Μια έκφραση που για να αξιώνει να λέγεται ελεύθερη, προϋποθέτει τον ολοκληρωτικό
                                        αποκλεισμό κάθε
                                        άποψης που βασίζεται σε διακρίσεις και αναπαράγει τις κοινωνικές ανισότητες.
                                    </h5>

                                </Col>
                            </Row>
                            <Row>
                                <Col className="ml-auto mr-auto" md="8">
                                    <h2 className="title">Βρείτε μας
                                    </h2>
                                    <div className="description">
                                        <h6>ΔΙΕΥΘΥΝΣΗ</h6>
                                        <span>Πανεπιστημιούπολη Ρεθύμνου, έναντι γραφείων μέριμνας</span>
                                        <br/> <br/>
                                        <div style={{width: "100%", height: "100%"}}>
                                            <GMapReact/>
                                        </div>
                                        <h6>ΕΠΙΚΟΙΝΩΝΙΑ</h6>
                                        <span className="">studio: &nbsp;</span>
                                        <span className="text-muted subscribe-line">2831077777</span>
                                        <br/>
                                        <span className="">email: &nbsp;</span>
                                        <span className="text-muted subscribe-line">matzore@uoc.gr</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div className="col-sm-12">
                                    <div className="middle">
                                        <a className="btn2" href="https://www.facebook.com/matzorefm89.1/">
                                            <i className="fa fa-facebook-f"/>
                                        </a>
                                        <a className="btn2" href="https://www.instagram.com/89.1matzore/">
                                            <i className="fa fa-instagram"/>
                                        </a>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </div>
            </DocumentMeta>
        )
    }
}

export default AboutUs;
