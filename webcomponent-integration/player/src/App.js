import React from 'react';
import ReactPlayer from 'react-player';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playbackUrl: props.url
        };
    }

    render() {
        return (
            <ReactPlayer
                url={(this.state.playbackUrl === "false") ? 
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
                    : this.state.playbackUrl}
                playing
                width={'100%'}
                height={'100%'}
                controls
            />
        )
    }
}
export default Player;