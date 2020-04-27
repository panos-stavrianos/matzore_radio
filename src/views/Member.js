import React, {Component} from "react";
import IndexFooter from "../components/Footers/IndexFooter";
import {Col, Container, Row} from "reactstrap";
import DocumentMeta from "react-document-meta";
import {get_default_meta} from "../default_meta";
import {Link} from "react-router-dom";

function member_title(member) {
    if (member.articles && member.shows && member.articles.length && member.shows.length)
        return "Music Producer / Author";
    else if (member.articles && member.articles.length)
        return "Author";
    else if (member.shows && member.shows.length)
        return "Music Producer";
    else return "Member"
}

function ShowsList({shows}) {
    if (shows && shows.length) {
        return (
            <div>
                <h3>Εκπομπές</h3>
                {shows.map((show, i) => (
                    <h5 key={i}><Link to={'/show/' + show.id}>{show.name}</Link></h5>
                ))}
            </div>
        );
    } else
        return (<br/>)
}

function ArticlesList({articles}) {
    if (articles && articles.length) {
        return (
            <div>
                <h3>Άρθρα</h3>
                {articles.map((article, i) => (
                    <h5 key={i}><Link to={'/article/' + article.id}>{article.title}</Link></h5>
                ))}
            </div>
        );
    } else
        return (<br/>)
}

class Member extends Component {
    state = {
        member: {
            'name': '',
            'bio': '',
            'avatar': require("assets/img/matzore_logo_192.png"),
            'shows': []
        },
        meta: get_default_meta()
    };

    componentDidMount() {
        const {match: {params}} = this.props;
        fetch('https://matzore-shows.herokuapp.com/api/get_member/' + params.id)
            .then(res => {
                return res.json();
            })
            .then((data) => {
                data.member.avatar = data.member.avatar ? data.member.avatar : require("assets/img/matzore_logo_192.png")
                data.meta = get_default_meta({
                    title: data.member.name,
                    description: data.member.bio,
                    image: data.member.avatar
                })
                this.setState(data);
                window.dispatchEvent(new CustomEvent('new_page'))
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
                                    src={this.state.member.avatar}
                                />
                            </div>
                            <div className="name">
                                <h4 className="title">
                                    {this.state.member.name} <br/>
                                </h4>
                                <h6 className="description">{member_title(this.state.member)}</h6>
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
                        <Row>
                            <Col className="ml-auto mr-auto text-center">
                                <ArticlesList articles={this.state.member.articles}/>
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

export default Member;
