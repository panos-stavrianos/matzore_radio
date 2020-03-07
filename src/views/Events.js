import React, {Component} from "react";

import IndexNavbar from "../components/Navbars/IndexNavbar";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import EventsGrid from "components/Grids/EventsGrid";
import IndexFooter from "../components/Footers/IndexFooter";

class Events extends Component {
    state = {
        events: []
    };

    componentDidMount() {
        fetch('https://matzore-shows.herokuapp.com/api/get_events')
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
                    <EventsGrid events={this.state.events}/>
                </div>
                <IndexFooter/>

            </>
        )
    }
}

export default Events;
