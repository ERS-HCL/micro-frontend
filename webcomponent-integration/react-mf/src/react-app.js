import React from 'react'
import { render } from 'react-dom';
import App from './App';

window.customElements.define('react-app', class ReactApp extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        console.log('ReactApp connected');
        this.renderApp();
    }

    renderApp() {
        render(<App playVideo={this.playVideo}/>, this);
    }

    disconnectedCallback() {
        console.log('ReactApp disconnected');
    }

    playVideo = (value) => {
        console.log("########## ", value);
        this.dispatchEvent(new CustomEvent('playbackUrl', { detail: value }));
    }
});
