import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

window.renderSports = (containerId) => {
    ReactDOM.render(
        <App />,
        document.getElementById(containerId),
    );
};

window.unmountSports = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};