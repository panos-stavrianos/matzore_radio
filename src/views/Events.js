import React, {Component} from "react";
import EventsGrid from "components/Grids/EventsGrid";
import IndexFooter from "../components/Footers/IndexFooter";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";

class Events extends Component {
    state = {
        events: [],
        meta: get_default_meta()
    };

    componentDidMount() {
        fetch('https://matzore-shows.herokuapp.com/api/get_events')
            .then(res => res.json())
            .then((data) => this.setState(data))
            .catch(console.log);
    }

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'Εκδηλώσεις'})}>
                <div className="main">
                    <EventsGrid events={this.state.events}/>
                </div>
                <IndexFooter/>
            </DocumentMeta>
        )
    }
}

export default Events;
