import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

window.renderPlayer = (containerId, history) => {
    ReactDOM.render(
        <App history={history} />,
        document.getElementById(containerId),
    );
};

window.unmountPlayer = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};