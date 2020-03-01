import React, {Component} from "react";
import "assets/css/social_bar.css";

import IndexNavbar from "./../components/Navbars/IndexNavbar.js";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import {Col, Container, Row} from "reactstrap";


class AboutUs extends Component {

    render() {
        return (
            <>
                <IndexNavbar/>
                <IndexHeader/>
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
                                        <h6>ΕΠΙΚΟΙΝΩΝΙΑ</h6>
                                        <span className="">studio: &nbsp;</span>
                                        <span className="text-muted subscribe-line">2831077777</span>
                                        <br/>
                                        <span className="">email: &nbsp;</span>
                                        <span className="text-muted subscribe-line">matzore89.1@outlook.com</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div className="col-sm-12">
                                    <div className="middle">
                                        <a className="btn2" href="https://facebook.com">
                                            <i className="text-center fa fa-facebook-f"/>
                                        </a>
                                        <a className="btn2" href="https://facebook.com">
                                            <i className="fa fa-twitter"/>
                                        </a>

                                        <a className="btn2" href="https://facebook.com">
                                            <i className="fa fa-instagram"/>
                                        </a>

                                        <a className="btn2" href="https://facebook.com">
                                            <i className="fa fa-google"/>
                                        </a>

                                        <a className="btn2" href="https://facebook.com">
                                            <i className="fa fa-youtube"/>
                                        </a>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </div>
            </>
        )
    }
}

export default AboutUs;
