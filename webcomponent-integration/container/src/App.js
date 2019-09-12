import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppHeader from './AppHeader';

class App extends React.Component {
    constructor() {
        super();
        this.container = null;
        this.webComponentType = null;
        this.history = null;
    }

    startPlayback = (url) => {
        this.history.push(this.history.location.pathname);
        this.container.innerHTML = "";
        this.webComponentType = 'player-app';
        const webComponent = document.createElement(this.webComponentType);
        webComponent.setAttribute('playbackUrl', url);
        this.container.appendChild(webComponent);
    }

    componentDidMount() {
        this.container = document.querySelector("#container");
        this.loadMicrofrontend();
    }

    selectMicrofrontend = ({history}) => {
        this.history = history;
        const webComponentsByRoute = {
            '/': 'react-app',
            '/movies': 'react-app',
            '/music': 'angular-app',
        };
        this.webComponentType = webComponentsByRoute[window.location.pathname];
        if (this.container) {
            this.loadMicrofrontend(history);
        }
        return null;
    }

    loadMicrofrontend = () => {
        this.container.innerHTML = '';
        const webComponent = document.createElement(this.webComponentType);
        webComponent.setAttribute('title', "Deepak Bohra");
        this.container.appendChild(webComponent);
        webComponent.addEventListener('playbackUrl', data => this.startPlayback(data.detail));
    }

    renderAbout = () => {
        this.container.innerHTML = `
            <main id='about'>
                <h1>Micro Frontends</h1>
                <p>
                    <span id='pSpan'>Micro frontends</span> is an architectural style where 
                    independently deliverable frontend apps are composed into a greater whole. 
                </p>
                <p> 
                    It's useful for breaking up monolithic frontend codebases into smaller, simpler
                    applications that can be delivered to production by multiple teams independently.
                </p>
                <img id='mfImg'></img>
            </main>`
        return null;
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <AppHeader />
                    <div id='container'>
                        <Switch>
                            <Route exact path={["/", "/movies", "/music"]} component={this.selectMicrofrontend} />
                            <Route exact path="/about" component={this.renderAbout} />
                        </Switch>
                    </div>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default App;