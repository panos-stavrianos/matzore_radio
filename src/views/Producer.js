import React, {Component} from "react";

import IndexNavbar from "./../components/Navbars/IndexNavbar.js";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import DemoFooter from "../components/Footers/DemoFooter";
import {
    Col,
    Container,
    Row
} from "reactstrap";


function ShowsList(shows) {
    shows = shows.shows;
    if (shows.length > 0) {
        return (
            <div>
                <h3>Εκπομπές</h3>
                {shows.map((show,i) => (
                    <h5 key={i}><a href={'/show/' + show.id}>{show.name}</a></h5>
                ))}
            </div>
        );
    } else
        return (<br/>)
}

class Producer extends Component {
    state = {
        member: {
            'name': '',
            'bio': '',
            'avatar': require("assets/img/matzore_logo_192.png"),
            'shows': []
        }
    };

    componentDidMount() {
        const {match: {params}} = this.props;
        fetch('https://matzore-shows.herokuapp.com/api/get_member/' + params.id)
            .then(res => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                data.avatar = data.avatar ? data.avatar : require("assets/img/matzore_logo_192.png")
                this.setState({member: data});
            })
            .catch(console.log);
    }


    render() {
        return (
            <>
                <IndexNavbar/>
                <IndexHeader/>
                <div className="section profile-content">
                    <Container>
                        <div className="owner">
                            <div className="avatar">
                                <img
                                    alt="..."
                                    className="img-circle img-no-padding img-responsive border-white-5"
                                    src={this.state.member.avatar}
                                />
                            </div>
                            <div className="name">
                                <h4 className="title">
                                    {this.state.member.name} <br/>
                                </h4>
                                <h6 className="description">Music Producer</h6>
                            </div>
                        </div>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="6">
                                <p>
                                    {this.state.member.bio}
                                </p>
                            </Col>
                        </Row>

                        <Row>

                            <Col className="ml-auto mr-auto text-center">
                                <ShowsList shows={this.state.member.shows}/>
                            </Col>
                        </Row>


                        <br/>
                    </Container>
                </div>
                <DemoFooter/>
            </>
        )
    }

}

export default Producer;
