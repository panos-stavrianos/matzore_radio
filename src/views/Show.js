import React, {Component} from "react";
import IndexNavbar from "./../components/Navbars/IndexNavbar.js";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import IndexFooter from "../components/Footers/IndexFooter";
import {Col, Container, Row} from "reactstrap";
import {Viewer} from '@toast-ui/react-editor'

function Social({social, link}) {
    switch (social) {
        case 'facebook':
            return (<a className="btn2" href={link}>
                <i className="fa fa-facebook-f"/>
            </a>);
        case 'instagram':
            return (<a className="btn2" href={link}>
                <i className="fa fa-instagram"/>
            </a>);
        case 'twitter':
            return (<a className="btn2" href={link}>
                <i className="fa fa-twitter"/>
            </a>);
        default:
            return (<></>)
    }


}

function DescriptionMD({description}) {
    return (
        <Viewer
            initialValue={description}
            previewStyle="vertical"
            initialEditType="markdown"
        />)
}

function MembersList({producers: members}) {
    if (members && members.length) {
        return (
            <div>
                <h3>Μουσικοί παραγωγοί</h3>
                {members.map((member, i) => (
                    <h5 key={i}><a href={'/member/' + member.id}>{member.name}</a></h5>
                ))}
            </div>
        );
    } else
        return (<br/>)
}


class Show extends Component {
    state = {
        show: {
            'name': '',
            'description': '',
            'email': '',
            'facebook': '',
            'instagram': '',
            'twitter': '',
            'logo': require("assets/img/matzore_logo_192.png"),
            'members': [],
        }
    };

    componentDidMount() {
        const {match: {params}} = this.props;
        fetch('https://matzore-shows.herokuapp.com/api/get_show/' + params.id)
            .then(res => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                data.logo = data.logo ? data.logo : require("assets/img/matzore_logo_192.png");
                this.setState({show: data});
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
                                    src={this.state.show.logo}
                                />
                            </div>
                            <div className="name">
                                <h4 className="title">
                                    {this.state.show.name} <br/>
                                </h4>
                                <h6 className="description">ΕΚΠΟΜΠΗ</h6>
                            </div>
                        </div>
                        <div className="middle">
                            <Social social='facebook' link={this.state.show.facebook}/>
                            <Social social='instagram' link={this.state.show.instagram}/>
                            <Social social='twitter' link={this.state.show.twitter}/>
                        </div>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="6">
                                <DescriptionMD description={this.state.show.description}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ml-auto mr-auto text-center">
                                <MembersList members={this.state.show.members}/>
                            </Col>
                        </Row>
                        <br/>
                    </Container>
                </div>
                <IndexFooter/>
            </>
        )
    }
}

export default Show;
