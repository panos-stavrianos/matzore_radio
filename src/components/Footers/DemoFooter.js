import React from "react";

// reactstrap components
import {Row, Container, Col} from "reactstrap";

function DemoFooter() {
    return (
        <footer className="footer footer-black bg-dark">
            <Container>
                <Row>
                    <Col className="m-3" md="8">
                        <h5 className="description">
                            <h6>ΔΙΕΥΘΥΝΣΗ</h6>
                            <span>Πανεπιστημιούπολη Ρεθύμνου, έναντι γραφείων μέριμνας</span>
                            <br/>
                            <br/>
                            <h6>ΕΠΙΚΟΙΝΩΝΙΑ</h6>
                            <span className="">studio: &nbsp;</span>
                            <span className="text-muted subscribe-line">2831077777</span>
                            <br/>
                            <span className="">γραφείο: &nbsp;</span>
                            <span className="text-muted subscribe-line">2831028156</span>
                            <br/>
                            <span className="">email: &nbsp;</span>
                            <span className="text-muted subscribe-line">matzore89.1@outlook.com</span>
                        </h5>
                    </Col>
                    <div className="credits">
                        <span className="copyright">
                          © {new Date().getFullYear()}
                            <i className="fa fa-music heart" style={{position: "unset"}}/>
                            Made by matzore fm 89.1
                        </span>
                    </div>
                </Row>
            </Container>
        </footer>
    );
}

export default DemoFooter;
