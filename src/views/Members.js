import React, {Component} from "react";

import IndexNavbar from "../components/Navbars/IndexNavbar";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import IndexFooter from "../components/Footers/IndexFooter";
import MembersGrid from "../components/Grids/MembersGrid";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";


class Members extends Component {
    state = {
        members: []
    };

    componentDidMount() {
        fetch('https://matzore-shows.herokuapp.com/api/get_members')
            .then(res => res.json())
            .then((data) => this.setState(data))
            .catch(console.log);
    }

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'Μέλη'})}>
                <IndexNavbar/>
                <IndexHeader/>
                <div className="main">
                    <MembersGrid members={this.state.members}/>
                </div>
                <IndexFooter/>
            </DocumentMeta>
        )
    }
}

export default Members;
