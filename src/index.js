import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import About from "./About";
import Sketches from "./Sketches";
import Nav from './Nav';
import PlayPage from './PlayPage'
import Lupa from './Lupa'
import projectData from './projectData'

const history = createBrowserHistory();

const routes = projectData
    .filter(pr => pr.route)
    .map(p => <Route key={p.route} path={"/" + p.route} component={() => IFrame(p.link, p.route)} />)

console.log(routes, 'routes')

//don't use /* zuerst.... prueft Routen sequentiell
class Index extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Nav/>
                    <Switch>
                        <Route exact path="/" component={() => App(projectData)}/>
                        <Route path="/sketch" component={Sketches}/>
                        <Route path="/about" component={About}/>
                        <Route path="/lupa" component={Lupa}/>
                        {projectData
                            .filter(pr => pr.route)
                            .map(p => <Route key={p.route} path={"/" + p.route} component={() => IFrame(p.link, p.route)} />)}
                        <Route path="/play" component={() => PlayPage(projectData.slice(0, -2))}/>
                        {/*<Route path="/web-piano" component={() => IFra} />*/}
                        <Route component={() => <div>Couldn't find the page/url you're looking for</div>}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

const IFrame = (src, title) => (
    <iframe width={window.innerWidth} height={window.innerHeight}
            allow="camera; microphone"
            title={title}
            sandbox="allow-forms allow-popups allow-scripts allow-same-origin allow-modals"
            seamless src={src} frameBorder="0"
            allowFullScreen/>)


ReactDOM.render(<Index/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
