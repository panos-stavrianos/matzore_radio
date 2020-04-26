import React, {Component} from "react";
import IndexFooter from "../components/Footers/IndexFooter";
import ArticlesGrid from "../components/Grids/ArticlesGrid";
import EventsGrid from "../components/Grids/EventsGrid";
import DocumentMeta from "react-document-meta";
import {get_default_meta} from "../default_meta";

class Tag extends Component {
    state = {
        articles: [],
        events: []
    };

    componentDidMount() {
        const {match: {params}} = this.props;
        fetch('https://matzore-shows.herokuapp.com/api/get_tag/' + params.id)
            .then(res => res.json())
            .then((data) => {
                this.setState(data);
            })
            .catch(console.log);
    }

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'Tag'})}>
                <div className="main">
                    <ArticlesGrid articles={this.state.articles}/>
                    <EventsGrid events={this.state.events}/>
                </div>
                <IndexFooter/>

            </DocumentMeta>
        )
    }
}

export default Tag;
