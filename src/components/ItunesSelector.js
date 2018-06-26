import React from "react";

class ItunesSelector extends React.Component {
  render() {
    const songListItems = this.props.songs.map((song, index) => (
      <option
        key={song.alpha2Code}
        value={index}>
        {song["im:name"].label}
      </option>

    ))
    return (
    
      <ul>
        <li>{songListItems}</li>
      </ul>
    )
  }
}

export default ItunesSelector;
