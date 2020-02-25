import React, {Component} from "react";

import IndexNavbar from "./../components/Navbars/IndexNavbar.js";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import DemoFooter from "../components/Footers/DemoFooter";
import {Col, Container, Row} from "reactstrap";

class Articles extends Component {
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
                                    <h2 className="title">Άρθρα</h2>
                                    <h5 className="description">
                                        Δεν υπάρχουν ακόμα άρθρα
                                    </h5>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <DemoFooter/>
            </>
        )
    }
}

export default Articles;
