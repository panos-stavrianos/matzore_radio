import React, {Component} from "react";

import IndexNavbar from "./../components/Navbars/IndexNavbar.js";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import DemoFooter from "../components/Footers/DemoFooter";
import ProducersGrid from "../components/ProducersGrid";

class Producers extends Component {
    state = {
        members: []
    };

    componentDidMount() {
        fetch('https://matzore-shows.herokuapp.com/api/get_members')
            .then(res => res.json())
            .then((data) => this.setState({members: data}))
            .catch(console.log);
    }

    render() {
        return (
            <>
                <IndexNavbar/>
                <IndexHeader/>
                <div className="main">
                    <ProducersGrid members={this.state.members}/>
                </div>
                <DemoFooter/>

            </>
        )
    }
}

export default Producers;
