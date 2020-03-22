import React from "react";
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
    return (
        <>
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
        </>
    );
}

export default Index;
