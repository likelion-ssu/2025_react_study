import React from "react";
import Song from "./Song.jsx";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function App() {
  const songs = [
    {
      id: 1,
      albumArt: "/music1.jpg",
      title: "Famous",
      artist: "ALLDAY PROJECT",
    },
    { id: 2, albumArt: "/music2.jpg", title: "Dirty Work", artist: "aespa" },
    { id: 3, albumArt: "/music3.jpg", title: "Drowning", artist: "WOODZ" },
    { id: 4, albumArt: "/music4.jpg", title: "너에게 닿기를", artist: "10CM" },
  ];

  return (
    <Wrapper>
      {songs.map((song, index) => {
        return (
          <Song
            key={song.id}
            albumArt={song.albumArt}
            title={song.title}
            artist={song.artist}
          />
        );
      })}
    </Wrapper>
  );
}

export default App;
