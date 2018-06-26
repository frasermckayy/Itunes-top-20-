import React from "react";
import ItunesSelector from "../components/ItunesSelector";
import ItunesDetails from "../components/ItunesDetails";

class ItunesBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      selectedSong: ""
    }

    this.handleSongSelect = this.handleSongSelect.bind(this);

  }

  componentDidMount() {
    console.log("component did mount...");
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}));
  }

  handleSongSelect(event) {
    const songIndex = event.target.value;
    const song = this.state.songs[songIndex];
    this.setState({selectedSong: song})
  }

  render() {
    console.log("rendering..");
    return (
      <div>
        <ItunesSelector
          songs={this.state.songs}
          onSelect={this.handleSongSelect}
        />
        <ItunesDetails song={this.state.selectedSong}/>
      </div>
    )
  }
}
export default ItunesBox;
