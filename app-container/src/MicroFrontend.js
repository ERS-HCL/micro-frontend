import React from 'react';

class MicroFrontend extends React.Component {

    componentDidMount() {
        const { name, document } = this.props;
        const retryCount = 0;
        const scriptId = `micro-frontend-script-${name}`;
        if (document.getElementById(scriptId)) {
            this.renderMicroFrontend();
        } else {
            this.fetchMicrofendScript(scriptId, retryCount);
        }
    }

    fetchMicrofendScript = (scriptId, retryCount) => {
        const { host, document } = this.props;
        fetch(`${host}/asset-manifest.json`)
        .then(res => res.json())
        .then(manifest => {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = `${host}${manifest['files']['main.js']}`;
            script.onload = this.renderMicroFrontend;
            document.head.appendChild(script);
        })
        .catch(error => { 
            retryCount++;
            console.error('Error while loading the script :', error, " retry count ",retryCount);
            if (retryCount < 3) {
                setTimeout( () => {
                    this.fetchMicrofendScript(scriptId, retryCount);
                }, 2000);
            }
        });
    }

    componentWillUnmount() {
        const { name, window } = this.props;
        window[`unmount${name}`](`${name}-container`);
    }

    renderMicroFrontend = () => {
        const { name, window, history } = this.props;
        window[`render${name}`](`${name}-container`, history);
    }

    render() {
        return <main id={`${this.props.name}-container`} />;
    }
}

MicroFrontend.defaultProps = {
    document,
    window,
};

export default MicroFrontend;  