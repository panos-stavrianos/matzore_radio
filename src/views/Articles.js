import React, {Component} from "react";
import ArticlesGrid from "components/Grids/ArticlesGrid";
import IndexFooter from "../components/Footers/IndexFooter";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";

class Articles extends Component {
    state = {
        articles: [],
        category: {},
    };

    componentDidMount() {
        const params = this.props.match.params;
        console.log(params)
        fetch((params.id ? 'https://matzore-shows.herokuapp.com/api/get_category/' + params.id : 'https://matzore-shows.herokuapp.com/api/get_articles'))
            .then(res => res.json())
            .then((data) => {
                this.setState(data);
            })
            .catch(console.log);
    }

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'Άρθρα'})}>
                <div className="main">
                    <ArticlesGrid articles={this.state.articles} category={this.state.category}/>
                </div>
                <IndexFooter/>
            </DocumentMeta>
        )
    }
}

export default Articles;
