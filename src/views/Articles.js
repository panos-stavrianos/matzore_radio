import React, {Component} from "react";

import IndexNavbar from "../components/Navbars/IndexNavbar";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import ArticlesGrid from "components/Grids/ArticlesGrid";
import IndexFooter from "../components/Footers/IndexFooter";

class Articles extends Component {
    state = {
        articles: [],
        category: {},
    };

    componentDidMount() {
        const {match: {params}} = this.props;
        fetch((params.id ? 'https://matzore-shows.herokuapp.com/api/get_category/' + params.id : 'https://matzore-shows.herokuapp.com/api/get_articles'))
            .then(res => res.json())
            .then((data) => this.setState(data))
            .catch(console.log);
    }

    render() {
        return (
            <>
                <IndexNavbar/>
                <IndexHeader/>
                <div className="main">
                    <ArticlesGrid articles={this.state.articles} category={this.state.category}/>
                </div>
                <IndexFooter/>

            </>
        )
    }
}

export default Articles;
