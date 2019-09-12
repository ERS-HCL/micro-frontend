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
      sportsArr: [],
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    const host = process.env.REACT_APP_CONTENT_HOST;
    fetch(`${host}/sports.json`)
      .then(result => result.json())
      .then(sportsArr => {
        this.setState({
          sportsArr: sportsArr.map(sports => ({
            ...sports,
            imageSrc: `${host}${sports.imageSrc}`,
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
      sportsArr,
      loading,
      error,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <MainColumn>
          Sorry, but the sports list is unavailable right now
          </MainColumn>
      );
    }
    return (
      <MainColumn>
        <Tray>
          {sportsArr.map(sports => (
            <Thumbnail key={sports.id} sports={sports} />
          ))}
        </Tray>
      </MainColumn>
    );
  }
}

export default App;