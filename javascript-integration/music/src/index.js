import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

window.renderMusic = (containerId) => {
    ReactDOM.render(
        <App />,
        document.getElementById(containerId),
    );
};

window.unmountMusic = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};