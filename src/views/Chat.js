import React, {Component} from "react";
import MediaQuery from 'react-responsive';
import IndexFooter from "../components/Footers/IndexFooter";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";


function ChatBox({style}) {
    return (
        <>
            <div id="tlkio" data-channel="c1bdac" style={style}/>

        </>
    );
}


class Chat extends Component {
    componentDidMount() {
        console.log("VHAT")
        console.log(document.getElementById("tlkio"))
        dispatchEvent(new Event('load'));
    }

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'Chat'})}>
                {window.dispatchEvent(new CustomEvent('new_page'))}
                <div className="main">
                    <MediaQuery minDeviceWidth={1224}>
                        <div className='justify-content-center center m-5'>
                            <div className='card col-lg-10 border-danger'>
                                <div className='card-body border-danger'>
                                    <ChatBox style={{height: '600px', width: "100%"}}/>
                                    {/*<LoadChat />*/}
                                </div>
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={1224}>
                        <div className='justify-content-center center'>
                            <ChatBox style={{height: '600px', width: "100%"}}/>
                            {/*<LoadChat />*/}

                        </div>
                    </MediaQuery>
                </div>
                <IndexFooter/>
            </DocumentMeta>
        )
    }
}

export default Chat;
