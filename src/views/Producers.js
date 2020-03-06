import React, {Component} from "react";

import IndexNavbar from "./../components/Navbars/IndexNavbar.js";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import IndexFooter from "../components/Footers/IndexFooter";
import ProducersGrid from "../components/Grids/ProducersGrid";

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
                <IndexFooter/>
            </>
        )
    }
}

export default Producers;
