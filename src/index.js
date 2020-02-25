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
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/css/index.css";

// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Shows from "./views/Shows";
import Chat from "./views/Chat";
import AboutUs from "./views/AboutUs";
import Producers from "./views/Producers";
import Schedule from "./views/Schedule";
import Events from "./views/Events";
import Articles from "./views/Articles";
// others

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/index" render={props => <Index {...props} />}/>
            <Route path="/shows" render={props => <Shows {...props} />}/>
            <Route path="/chat" render={props => <Chat {...props} />}/>
            <Route path="/producers" render={props => <Producers {...props} />}/>
            <Route path="/schedule" render={props => <Schedule {...props} />}/>
            <Route path="/events" render={props => <Events {...props} />}/>
            <Route path="/articles" render={props => <Articles {...props} />}/>
            <Route path="/about_us" render={props => <AboutUs {...props} />}/>
            <Route
                path="/nucleo-icons"
                render={props => <NucleoIcons {...props} />}
            />
            <Route
                path="/landing-page"
                render={props => <LandingPage {...props} />}
            />
            <Route
                path="/profile-page"
                render={props => <ProfilePage {...props} />}
            />
            <Route
                path="/register-page"
                render={props => <RegisterPage {...props} />}
            />
            <Redirect to="/index"/>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
