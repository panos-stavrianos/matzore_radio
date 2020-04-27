import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";

import "assets/css/index.css";
import 'assets/css/schedule.css';
// pages
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
import IndexNavbar from "./components/Navbars/IndexNavbar";
import IndexHeader from "./components/Headers/IndexHeader";
import Index from "./views/Index";


ReactDOM.render(
    <BrowserRouter>
        <div>
            <IndexNavbar/>
            <IndexHeader/>
            <div className="content" id="content_s">
                <Switch>
                    <Route exact path='/'
                           component={(props) => <Index {...props} key={window.location.pathname}/>}/>
                    <Route path='/index' component={(props) => <Index {...props} key={window.location.pathname}/>}/>
                    <Route path="/chat" render={props => <Chat {...props} />}/>
                    <Route path="/about_us" render={props => <AboutUs {...props} />}/>
                    <Route path="/schedule" render={props => <Schedule {...props} />}/>
                    <Route path="/shows" render={props => <Shows {...props} />}/>
                    <Route path="/events" render={props => <Events {...props} />}/>
                    <Route path="/members" render={props => <Members {...props} />}/>
                    <Route path="/articles" render={props => <Articles {...props} />}/>

                    <Route path='/show/:id'
                           component={(props) => <Show {...props} key={window.location.pathname}/>}/>
                    <Route path='/member/:id'
                           component={(props) => <Member {...props} key={window.location.pathname}/>}/>
                    <Route path='/author/:id'
                           component={(props) => <Member {...props} key={window.location.pathname}/>}/>
                    <Route path='/event/:id'
                           component={(props) => <Event {...props} key={window.location.pathname}/>}/>
                    <Route path='/articles_category/:id'
                           component={(props) => <Articles {...props} key={window.location.pathname}/>}/>
                    <Route path='/article/:id'
                           component={(props) => <Article {...props} key={window.location.pathname}/>}/>
                    <Route path='/tag/:id' component={(props) => <Tag {...props} key={window.location.pathname}/>}/>
                </Switch>
            </div>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);

