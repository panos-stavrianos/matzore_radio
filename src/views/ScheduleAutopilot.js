import React, {Component} from "react";
import IndexFooter from "../components/Footers/IndexFooter";
import {Tab, Tabs} from "react-bootstrap";
import {Container} from "reactstrap";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";
import ScheduleAutopilotTimeline from "../components/Grids/ScheduleAutopilotTimeline";

class ScheduleAutopilot extends Component {
    state = {
        schedule: {},
        days: {}
    };

    componentDidMount() {
        fetch('https://matzore-shows.herokuapp.com/api/get_autopillot_schedule')
            .then(res => res.json())
            .then((data) => {
                this.setState(data);
            })
            .catch(console.log);
    }

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'Πρόγραμμα Εκπομπών'})}>
                {window.dispatchEvent(new CustomEvent('new_page'))}
                <div className="main">
                    <Container>
                        <Tabs fill defaultActiveKey={new Date().toLocaleString("en-US", {weekday: 'long'})}
                              id="uncontrolled-tab-example">
                            {Object.keys(this.state.days).map((day, i) => (
                                <Tab eventKey={this.state.days[day][0]} title={this.state.days[day][1]} key={i}>
                                    <ScheduleAutopilotTimeline records={this.state.schedule[day]}
                                                               day={this.state.days[day]}/>
                                </Tab>
                            ))}
                        </Tabs>
                    </Container>
                </div>
                <IndexFooter/>

            </DocumentMeta>
        )
    }
}

export default ScheduleAutopilot;
