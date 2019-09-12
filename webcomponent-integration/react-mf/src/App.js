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
      movies: [],
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    const host = process.env.REACT_APP_CONTENT_HOST;
    fetch(`${host}/movies.json`)
      .then(result => result.json())
      .then(movies => {
        this.setState({
          movies: movies.map(movie => ({
            ...movie,
            imageSrc: `${host}${movie.imageSrc}`,
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
      movies,
      loading,
      error,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <MainColumn>
          Sorry, but the movie list is unavailable right now
        </MainColumn>
      );
    }
    return (
      <MainColumn>
        <Tray>
          {movies.map(movie => (
            <Thumbnail key={movie.id} movie={movie} playVideo={this.props.playVideo} />
          ))}
        </Tray>
      </MainColumn>
    );
  }
}

export default App;