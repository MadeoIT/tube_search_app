import React, { Component } from 'react';
import Search from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import YTSearch from 'youtube-api-search';

import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import apiKey from './KEYS';

const API_KEY = apiKey.youtube_api;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('avengers');
  }

  videoSearch(inputText) {
    YTSearch({key: API_KEY, term: inputText}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        <div>
          <AppBar title="TUBE SEARCH"></AppBar>
          <Search onInputText={(inputText) => this.videoSearch(inputText)} />
          <br/>
          <VideoDetail video={this.state.selectedVideo}/>
          <br/>
          <VideoList 
            onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
