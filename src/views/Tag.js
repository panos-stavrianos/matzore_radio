import React, {Component} from "react";

import IndexHeader from "./../components/Headers/IndexHeader.js";
import IndexFooter from "../components/Footers/IndexFooter";
import ArticlesGrid from "../components/Grids/ArticlesGrid";
import EventsGrid from "../components/Grids/EventsGrid";
import IndexNavbar from "../components/Navbars/IndexNavbar";

class Tag extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
        const {match: {params}} = this.props;
        fetch('https://matzore-shows.herokuapp.com/api/get_tag/' + params.id)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState(data);
            })
            .catch(console.log);
    }

    render() {
        return (
            <>
                <IndexNavbar/>
                <IndexHeader/>
                <div className="main">
                    <ArticlesGrid articles={this.state.articles}/>
                    <EventsGrid events={this.state.events}/>
                </div>
                <IndexFooter/>

            </>
        )
    }
}

export default Tag;
