import React from 'react'
import { render } from 'react-dom';
import App from './App';

window.customElements.define('player-app', class ReactApp extends HTMLElement {
    static get observedAttributes() {
        return ['playbackUrl'];
    }

    getPlaybackUrl() {
        return this.getAttribute('playbackUrl');
    }

    constructor() {
        super();
        console.log('Player-App constructor');
    }

    connectedCallback() {
        console.log('Player-App connected');
        this.renderApp();
    }

    renderApp() {
        let playbackUrl = this.getPlaybackUrl()
        render(<App url={playbackUrl}/>, this);
    }

    disconnectedCallback() {
        console.log('Player-App disconnected',);
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log('PlayerApp attributeChanged', attrName, oldVal, newVal);
        switch (attrName) {
            case 'playbackUrl':
                this.renderApp();
        }
    }
});
