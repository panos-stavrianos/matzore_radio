import React, {Component} from "react";

import IndexNavbar from "./../components/Navbars/IndexNavbar.js";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import ShowsGrid from "components/ShowsGrid";
import DemoFooter from "../components/Footers/DemoFooter";

class Shows extends Component {
    state = {
        shows: []
    };

    componentDidMount() {
        fetch('https://matzore-shows.herokuapp.com/api/get_shows')
            .then(res => res.json())
            .then((data) => this.setState({shows: data}))
            .catch(console.log);
    }

    render() {
        return (
            <>
                <IndexNavbar/>
                <IndexHeader/>
                <div className="main">
                    <ShowsGrid shows={this.state.shows}/>
                </div>
                <DemoFooter />

            </>
        )
    }
}

export default Shows;
