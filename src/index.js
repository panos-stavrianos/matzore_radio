import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";

import "assets/css/index.css";
import 'assets/css/schedule.css';
// pages
import Index from "views/Index.js";
import Shows from "./views/Shows";
import Chat from "./views/Chat";
import AboutUs from "./views/AboutUs";
import Members from "./views/Members";
import Schedule from "./views/Schedule";
import Events from "./views/Events";
import Event from "./views/Event";
import Articles from "./views/Articles";
import Article from "./views/Article";
import Member from "./views/Member";
import Show from "./views/Show";
import Tag from "./views/Tag";
//  others
const default_meta = {
    title: 'Ματζόρε FM 89,1',
    description: 'Ο σταθμός του Πανεπιστημίου Κρήτης στο Ρέθυμνο',
    meta: {
        property: {
            'og:title': 'Ματζόρε FM 89,1',
            'og:description': 'Ο σταθμός του Πανεπιστημίου Κρήτης στο Ρέθυμνο',
            'og:image': 'http://matzore.radio.uoc.gr/static/media/matzore_logo_192.f10c1636.png',
            'og:type': 'music.radio_station',
            'og:url':document.location.host
        },
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }}
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/index" render={props => <Index {...props} />}/>
            <Route path="/chat" render={props => <Chat {...props} />}/>
            <Route path="/about_us" render={props => <AboutUs {...props} />}/>
            <Route path="/schedule" render={props => <Schedule {...props} />}/>
            <Route path="/shows" render={props => <Shows {...props} />}/>
            <Route path="/show/:id" component={Show}/>
            <Route path="/members" render={props => <Members {...props} />}/>
            <Route path="/member/:id" component={Member}/>
            <Route path="/author/:id" component={Member}/>
            <Route path="/events" render={props => <Events {...props} />}/>
            <Route path="/event/:id" component={Event}/>
            <Route path="/articles" render={props => <Articles {...props} />}/>
            <Route path="/category/:id" component={Articles}/>
            <Route path="/article/:id" component={Article}/>
            <Route path="/tag/:id" component={Tag}/>
            <Redirect to="/index"/>
        </Switch>
    </BrowserRouter>,

    document.getElementById("root")
);

