import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

window.renderMovies = (containerId, history) => {
    ReactDOM.render(
        <App history={history} />,
        document.getElementById(containerId),
    );
};

window.unmountMovies = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};