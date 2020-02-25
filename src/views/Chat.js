import React, {Component} from "react";

import IndexNavbar from "./../components/Navbars/IndexNavbar.js";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import MediaQuery from 'react-responsive';
import DemoFooter from "../components/Footers/DemoFooter";

class Chat extends Component {

    render() {
        return (
            <>
                <IndexNavbar/>
                <IndexHeader/>
                <div className="main">
                    <MediaQuery minDeviceWidth={1224}>
                        <div className='justify-content-center center m-5'>
                            <div className='card col-lg-10 border-danger'>
                                <div className='card-body border-danger'>
                                    <div id="tlkio" data-channel="c1bdac" style={{height: '600px', width: "100%"}}/>
                                </div>
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={1224}>
                        <div className='justify-content-center center'>
                            <div id="tlkio" data-channel="hey" style={{height: '600px', width: "100%"}}/>
                        </div>
                    </MediaQuery>
                </div>
                <DemoFooter/>
            </>
        )
    }
}

export default Chat;
