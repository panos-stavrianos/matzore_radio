import React, {Component} from "react";

import IndexNavbar from "./../components/Navbars/IndexNavbar.js";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import IndexFooter from "../components/Footers/IndexFooter";
import {Col, Container, Row} from "reactstrap";
import {Viewer} from '@toast-ui/react-editor'
import Moment from "react-moment";

function DescriptionMD(description) {
    description = description.description;
    return (
        <Viewer
            initialValue={description}
            previewStyle="vertical"
            initialEditType="markdown"
        />)
}

function TagsList(tags, category) {
    tags = tags.tags;
    category = category.category;
    if (tags.length > 0) {
        return (
            <div><h4>
                <span className="badge badge-default m-1">
                    <a className='text-light' style={{fontWeight: 'bold'}}
                       href={'/category/' + category.id}>{category.name}</a>
                </span>
                {tags.map((tag, i) => (
                    <span key={i} className="badge badge-primary m-1">
                        <a className='text-light' href={'/tag/' + tag.id} title="Δείτε περισσότερα">{tag.name}</a>
                    </span>
                ))}
            </h4></div>
        );
    } else
        return (<br/>)
}

function AuthorsList(authors) {
    authors = authors.authors;
    if (authors.length > 0) {
        return (
            <>
                {authors.map((author, i) => (
                    <span className="badge badge-dark m-1" key={i}>
                        <a style={{fontWeight: 'bold'}} href={'/author/' + author.id}>{author.name}</a></span>
                ))}
            </>
        );
    } else
        return (<br/>)
}

class Article extends Component {
    state = {
        article: {
            'title': '',
            'body': '',
            'cover': require("assets/img/matzore_logo_192.png"),
            'created_at': '',
            'category': '',
            'authors': [],
            'tags': []
        },
    };

    componentDidMount() {
        const {match: {params}} = this.props;
        fetch('https://matzore-shows.herokuapp.com/api/get_article/' + params.id)
            .then(res => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                data.logo = data.logo ? data.logo : require("assets/img/matzore_logo_192.png");
                this.setState({
                    article: data
                });
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
                                    src={this.state.article.cover}
                                />
                            </div>
                            <div className="name">
                                <h4 className="title m-0">
                                    {this.state.article.title} <br/>
                                </h4>
                                <Row>
                                    <Col className="ml-auto mr-auto text-left" md={6}>
                                        <TagsList tags={this.state.article.tags}
                                                  category={this.state.article.category}/>
                                    </Col>
                                    <Col className="ml-auto mr-auto text-right" md={6}>

                                        <h5>
                                            {this.state.article.authors.length > 1 ? 'Authors: ' : 'Author: '}
                                            <span>
                                <AuthorsList authors={this.state.article.authors}/>
                                    </span>
                                        </h5>
                                        <p>
                                            Δημοσιεύτηκε:&nbsp;
                                            <span>
                                <Moment format="DD/MM/YYYY"
                                        style={{fontWeight: 'bold'}}>{this.state.article.created_at}</Moment>
                                    </span>
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <Row>
                            <Col className="ml-auto mr-auto text-left" md="12">
                                <DescriptionMD description={this.state.article.body}/>
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

export default Article;
