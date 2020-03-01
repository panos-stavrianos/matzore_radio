import React from "react";

// reactstrap components
import {Row, Container, Col} from "reactstrap";

function IndexFooter() {
    return (
        <footer className="footer footer-black bg-dark">
            <Container>
                <Row>
                    <Col md="6">
                        <div className='m-3'>

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
                        </div>

                    </Col>
                    <Col md="6">
                        <div className='m-3'>
                            <div className="credits center">
                        <span className="copyright">
                          © {new Date().getFullYear()}
                            <i className="fa fa-music heart" style={{position: "unset"}}/>
                            Made by matzore fm 89.1

                        </span>
                            </div>
                            <div className="center">
                                <div className="middle">
                                    <a className="btn2" href="https://facebook.com">
                                        <i className="fa fa-facebook-f"/>
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
                        </div>
                    </Col>

                </Row>

            </Container>
        </footer>
    );
}

export default IndexFooter;
