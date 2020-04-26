import React, {Component} from "react";
import IndexFooter from "../components/Footers/IndexFooter";
import {Col, Container, Row} from "reactstrap";
import marked from "marked";
import DocumentMeta from "react-document-meta";
import {get_default_meta} from "../default_meta";
import {Link} from "react-router-dom";

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
        <p dangerouslySetInnerHTML={{__html: marked(description)}}></p>
    )
}

function MembersList({producers: members}) {
    if (members && members.length) {
        return (
            <div>
                <h3>Μουσικοί παραγωγοί</h3>
                {members.map((member, i) => (
                    <h5 key={i}><Link to={'/member/' + member.id}>{member.name}</Link></h5>
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
        },
        meta: get_default_meta()
    };

    componentDidMount() {
        const {match: {params}} = this.props;
        fetch('https://matzore-shows.herokuapp.com/api/get_show/' + params.id)
            .then(res => {
                return res.json();
            })
            .then((data) => {
                data.show.logo = data.show.logo ? data.show.logo : require("assets/img/matzore_logo_192.png");
                data.meta = get_default_meta({
                    title: data.show.name,
                    description: data.show.description,
                    image: data.show.logo
                })
                this.setState(data);
            })
            .catch(console.log);
    }

    render() {
        return (
            <DocumentMeta {...this.state.meta}>
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
            </DocumentMeta>
        )
    }
}

export default Show;
