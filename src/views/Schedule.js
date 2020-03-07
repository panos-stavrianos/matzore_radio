import React, {Component} from "react";

import IndexNavbar from "../components/Navbars/IndexNavbar";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import IndexFooter from "../components/Footers/IndexFooter";
import {Tab, Tabs} from "react-bootstrap";
import ScheduleTimeline from "../components/Grids/ScheduleTimeline";
import {Container} from "reactstrap";

class Schedule extends Component {
    state = {
        schedule: {},
        days: {}
    };

    componentDidMount() {
        fetch('https://matzore-shows.herokuapp.com/api/get_schedule')
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
                    <Container>
                        <Tabs fill defaultActiveKey={new Date().toLocaleString("en-US", {weekday: 'long'})}
                              id="uncontrolled-tab-example">
                            {Object.keys(this.state.days).map((day, i) => (
                                <Tab eventKey={this.state.days[day][0]} title={this.state.days[day][1]} key={i}>
                                    <ScheduleTimeline records={this.state.schedule[day]} day={this.state.days[day]}/>
                                </Tab>
                            ))}
                        </Tabs>
                    </Container>
                </div>
                <IndexFooter/>

            </>
        )
    }
}

export default Schedule;
