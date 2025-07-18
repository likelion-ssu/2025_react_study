import { React, useState } from "react";
import Song from "./Song.jsx";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'SeoulAlrimTTF-Heavy';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2505-1@1.0/SeoulAlrimTTF-Heavy.woff2') format('woff2');
    font-style: normal;
}
  body {
    font-family: 'SeoulAlrimTTF', sans-serif;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

  const [index, setIndex] = useState(0);

  const ClickPrev = () => {
    setIndex((index) => (index - 1 + songs.length) % songs.length);
  };

  const ClickNext = () => {
    setIndex((index) => (index + 1) % songs.length);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Song
        albumArt={songs[index].albumArt}
        title={songs[index].title}
        artist={songs[index].artist}
        onPrev={ClickPrev}
        onNext={ClickNext}
      />
    </Wrapper>
  );
}

export default App;
