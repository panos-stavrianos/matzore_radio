import React, {Component} from "react";

import IndexNavbar from "./../components/Navbars/IndexNavbar.js";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import ArticlesGrid from "components/Grids/ArticlesGrid";
import IndexFooter from "../components/Footers/IndexFooter";

class Articles extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
        fetch('https://matzore-shows.herokuapp.com/api/get_articles')
            .then(res => res.json())
            .then((data) => this.setState({articles: data}))
            .catch(console.log);
    }

    render() {
        return (
            <>
                <IndexNavbar/>
                <IndexHeader/>
                <div className="main">
                    <ArticlesGrid articles={this.state.articles}/>
                </div>
                <IndexFooter />

            </>
        )
    }
}

export default Articles;
