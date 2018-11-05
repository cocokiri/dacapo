import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import About from "./About";
import Sketches from "./Sketches";
import Nav from './Nav';
import PlayPage from './PlayPage'

import projectData from './projectData'

const history = createBrowserHistory();

//don't use /* zuerst.... prueft Routen sequentiell
class Index extends Component {
    render() {
        return (
                <BrowserRouter history={history}>
                    <div>
                        <Nav/>
                        <Switch>
                            <Route exact path="/" component={() => App(projectData)}/>
                            <Route path="/sketch" component={Sketches}/>
                            <Route path="/about" component={About}/>
                            {projectData
                                .filter(pr => pr.route)
                                .map(p => <Route path={"/" + p.route} component={() => IFrame(p.link)} />)}
                            <Route path="/play" component={() => PlayPage(projectData.slice(0,-2))} />
                            {/*<Route path="/web-piano" component={() => IFra} />*/}
                            <Route component={() => <div>Couldn't find the page/url you're looking for</div>}/>
                        </Switch>
                    </div>
                </BrowserRouter>
        )
    }
}

const IFrame = (src) => (
    <iframe width={window.innerWidth} height={window.innerHeight}
            allow="camera; microphone"
            sandbox="allow-forms allow-popups allow-scripts allow-same-origin allow-modals"
                                seamless src={src} frameBorder="0"
            allowFullScreen/>)


ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
