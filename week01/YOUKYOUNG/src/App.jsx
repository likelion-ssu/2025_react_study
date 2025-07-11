import React from "react";
import Song from "./Song.jsx";

function App() {
  const songs = [
    { image: "/music1.jpg", title: "Famous", artist: "ALLDAY PROJECT" },
    { image: "/music2.jpg", title: "Dirty Work", artist: "aespa" },
    { image: "/music3.jpg", title: "Drowning", artist: "WOODZ" },
    { image: "/music4.jpg", title: "너에게 닿기를", artist: "10CM" },
  ];

  return (
    <div>
      {songs.map((song, index) => {
        return (
          <Song
            key={index}
            image={song.image}
            title={song.title}
            artist={song.artist}
          />
        );
      })}
    </div>
  );
}

export default App;
