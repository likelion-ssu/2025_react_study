import { useState } from 'react'
import Song from './Song';
import {songs} from './dataSong'
import styled from "styled-components";

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`


const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`

export default function App() {
  const [index, setIndex] = useState(0);

  function handleNext() {
    if(index < songs.length - 1)
    setIndex(i => i + 1);
  }

  function handlePrev() {
    if(index > 0)
    setIndex(i => i - 1);
  }

  let eachSong = songs[index];

  return (
    <MainSection>
      <ButtonSection>
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
      </ButtonSection>
      <Song title={eachSong.title} artist={eachSong.artist} albumArt={eachSong.albumArt} likes={eachSong.likes}></Song>
    </MainSection>
  );
}

