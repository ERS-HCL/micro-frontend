import React from 'react';
import Loading from './Loading';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

const Tray = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      musicArr: [],
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    const host = process.env.REACT_APP_CONTENT_HOST;
    fetch(`${host}/music.json`)
      .then(result => result.json())
      .then(musicArr => {
        this.setState({
          musicArr: musicArr.map(music => ({
            ...music,
            imageSrc: `${host}${music.imageSrc}`,
          })),
          loading: false,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false, error: true });
      });
  }

  render() {
    const {
      musicArr,
      loading,
      error,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <MainColumn>
          Sorry, but the music list is unavailable right now
          </MainColumn>
      );
    }
    return (
      <MainColumn>
        <Tray>
          {musicArr.map(music => (
            <Thumbnail key={music.id} music={music} />
          ))}
        </Tray>
      </MainColumn>
    );
  }
}

export default App;