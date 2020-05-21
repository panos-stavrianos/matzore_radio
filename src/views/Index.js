import React, {Component} from "react";
import IndexFooter from "../components/Footers/IndexFooter";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";

class Index extends Component {
    render() {
        return (
            <DocumentMeta {...get_default_meta()}>
                {window.dispatchEvent(new CustomEvent('new_page'))}
                <IndexFooter/>
            </DocumentMeta>
        )
    }
}

export default Index;
