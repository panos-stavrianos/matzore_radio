/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import {Container} from "reactstrap";

// core components
import RadioPlayer from "./../RadioPlayer";

function IndexHeader() {
    return (
        <>
            <div
                className="page-header section-dark"
                style={{
                    backgroundImage:
                        "url(" + require("./../../assets/img/nick.jpg") + ")"
                }}
            >
                <div className="filter"/>
                <div className="z99 content-center">
                    <Container className='z99'>
                        <div className="title-brand">


                            <RadioPlayer  />

                        </div>

                        <h2 className="presentation-subtitle text-center">
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

                {/*<h6 className="category category-absolute">*/}
                {/*    Designed and coded by{" "}*/}
                {/*    <a*/}
                {/*        href="https://www.creative-tim.com?ref=pkr-index-page"*/}
                {/*        target="_blank"*/}
                {/*    >*/}
                {/*        <img*/}
                {/*            alt="..."*/}
                {/*            className="creative-tim-logo"*/}
                {/*            src={require("assets/img/creative-tim-white-slim2.png")}*/}
                {/*        />*/}
                {/*    </a>*/}
                {/*</h6>*/}
            </div>
        </>
    );
}

export default IndexHeader;
