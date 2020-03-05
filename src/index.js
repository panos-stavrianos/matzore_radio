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
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";


import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';

import "assets/css/index.css";
import 'assets/css/schedule.css';
// pages
import Index from "views/Index.js";
import Shows from "./views/Shows";
import Chat from "./views/Chat";
import AboutUs from "./views/AboutUs";
import Producers from "./views/Producers";
import Schedule from "./views/Schedule";
import Events from "./views/Events";
import Event from "./views/Event";
import Articles from "./views/Articles";
import Article from "./views/Article";
import Producer from "./views/Producer";
import Show from "./views/Show";
import Tag from "./views/Tag";
// others

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/index" render={props => <Index {...props} />}/>
            <Route path="/chat" render={props => <Chat {...props} />}/>
            <Route path="/about_us" render={props => <AboutUs {...props} />}/>
            <Route path="/schedule" render={props => <Schedule {...props} />}/>

            <Route path="/shows" render={props => <Shows {...props} />}/>
            <Route path="/show/:id" component={Show}/>
            <Route path="/producers" render={props => <Producers {...props} />}/>
            <Route path="/producer/:id" component={Producer}/>
            <Route path="/author/:id" component={Producer}/>
            <Route path="/events" render={props => <Events {...props} />}/>
            <Route path="/event/:id" component={Event}/>
            <Route path="/articles" render={props => <Articles {...props} />}/>
            <Route path="/article/:id" component={Article}/>
            <Route path="/tag/:id" component={Tag}/>

            <Redirect to="/index"/>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
