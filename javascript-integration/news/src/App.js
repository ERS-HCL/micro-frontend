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
      newsArr: [],
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    const host = process.env.REACT_APP_CONTENT_HOST;
    fetch(`${host}/news.json`)
      .then(result => result.json())
      .then(newsArr => {
        this.setState({
          newsArr: newsArr.map(news => ({
            ...news,
            imageSrc: `${host}${news.imageSrc}`,
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
      newsArr,
      loading,
      error,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <MainColumn>
          Sorry, but the news list is unavailable right now
          </MainColumn>
      );
    }
    return (
      <MainColumn>
        <Tray>
          {newsArr.map(news => (
            <Thumbnail key={news.id} news={news} />
          ))}
        </Tray>
      </MainColumn>
    );
  }
}

export default App;