import React, {Component} from "react";

import IndexNavbar from "../components/Navbars/IndexNavbar";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import ShowsGrid from "components/Grids/ShowsGrid";
import IndexFooter from "../components/Footers/IndexFooter";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";

class Shows extends Component {
    state = {
        shows: []
    };

    componentDidMount() {
        fetch('https://matzore-shows.herokuapp.com/api/get_shows')
            .then(res => res.json())
            .then((data) => this.setState(data))
            .catch(console.log);
    }

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'Εκπομπές'})}>
                <IndexNavbar/>
                <IndexHeader/>
                <div className="main">
                    <ShowsGrid shows={this.state.shows}/>
                </div>
                <IndexFooter/>
            </DocumentMeta>
        )
    }
}

export default Shows;
