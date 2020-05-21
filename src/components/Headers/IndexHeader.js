import React from "react";
// reactstrap components
import {Container} from "reactstrap";
// core components
import RadioPlayer from "./../RadioPlayer";

function IndexHeader() {
    return (
        <>
            <div id="menu" className="page-header section-dark"
                 style={{
                     backgroundImage:
                         "url(" + require("./../../assets/img/nick.jpg") + ")"
                 }}>
                <div className="filter"/>
                <div className="z99 content-center">
                    <Container className='z99'>
                        <div className="title-brand">
                            <RadioPlayer/>
                        </div>
                        <h2  className="presentation-subtitle text-center">
                            Ο σταθμός του Πανεπιστημίου Κρήτης στο Ρέθυμνο
                        </h2>
                    </Container>
                </div>

                <div
                    className="moving-clouds z0"
                    style={{
                        backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
                    }}
                />
            </div>

        </>
    );
}

export default IndexHeader;
