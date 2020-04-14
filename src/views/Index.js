import React from "react";
import DocumentMeta from 'react-document-meta';
// core components
import IndexNavbar from "../components/Navbars/IndexNavbar";
import IndexHeader from "./../components/Headers/IndexHeader.js";
import IndexFooter from "./../components/Footers/IndexFooter.js";

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
    const meta = {
        title: 'Some Meta Title',
        description: 'I am a description, and I can create multiple tags',
        meta: {
            property: {
                "og:title": "Matzore",
                'og:image': 'http://matzore.radio.uoc.gr/static/media/matzore_logo_192.f10c1636.png'
            },
            charset: 'utf-8',
            name: {
                keywords: 'react,meta,document,html,tags'
            }
        }
    };
    return (
        <DocumentMeta {...meta}>
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
