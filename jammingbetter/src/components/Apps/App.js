import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResult/SearchResult";
import { Playlist } from "../Playlist/Playlist";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "name1", artist: "artist1", album: "ablum1", id: 1 },
        { name: "name2", artist: "artist2", album: "ablum2", id: 2 },
        { name: "name3", artist: "artist3", album: "ablum3", id: 3 },
      ],
      playlistName: "my playlist",
      playlistTracks: [
        {
          name: "playlistname1",
          artist: "playlistartist1",
          album: "playlistablum1",
          id: 4,
        },
        {
          name: "playlistname2",
          artist: "playlistartist2",
          album: "playlistablum2",
          id: 5,
        },
        {
          name: "playlistname3",
          artist: "playlistartist3",
          album: "playlistablum3",
          id: 6,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((saveTracks) => saveTracks.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }
  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack=>currentTrack.id !== track.id)

    this.setState({playlistTracks: tracks})
  }
  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }
  savePlaylist(){
    alert("working")
    // eslint-disable-next-line
    const trackUris = this.state.playlistTracks.map(track=>track.uri)
  }
  search(term){
    console.log(term)
  }
  render() {
    return (
      <div> 
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch ={this.search}/>
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack} 
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
