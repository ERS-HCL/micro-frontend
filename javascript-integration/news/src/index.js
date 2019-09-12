import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

window.renderNews = (containerId) => {
    ReactDOM.render(
        <App />,
        document.getElementById(containerId),
    );
};

window.unmountNews = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};