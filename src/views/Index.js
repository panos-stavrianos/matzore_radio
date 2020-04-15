import React from "react";
import DocumentMeta from 'react-document-meta';
// core components
import IndexNavbar from "../components/Navbars/IndexNavbar";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import IndexFooter from "./../components/Footers/IndexFooter.js";
import {get_default_meta} from "../default_meta";

// reactstrap components

// index sections

function Index() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("index");
        return function cleanup() {
            document.body.classList.remove("index");
        };
    });

    return (
        <DocumentMeta {...get_default_meta()}>
            <IndexNavbar/>
            <IndexHeader/>
            {/*<div className="main">*/}
            {/*  <SectionButtons />*/}
            {/*  <SectionNavbars />*/}
            {/*  <SectionNavigation />*/}
            {/*  <SectionProgress />*/}
            {/*  <SectionNotifications />*/}
            {/*  <SectionTypography />*/}
            {/*  <SectionJavaScript />*/}
            {/*  <SectionCarousel />*/}
            {/*  <SectionNucleoIcons />*/}
            {/*  <SectionDark />*/}
            {/*  <SectionLogin />*/}
            {/*  <SectionExamples />*/}
            {/*  <SectionDownload />*/}
            <IndexFooter/>
            {/*</div>*/}
        </DocumentMeta>
    );
}

export default Index;
