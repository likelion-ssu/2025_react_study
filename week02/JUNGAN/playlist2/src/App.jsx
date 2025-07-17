import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import Song from './Song.jsx'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`

function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index + 1) % songs.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  const songs = [
    { id: 1, title: 'astroworld', artist: 'Travis Scott', albumArt: '/albumArt/astroworld.jpeg' },
    { id: 2, title: 'BEIGE', artist: '키드밀리', albumArt: '/albumArt/BEIGE.jpeg' },
    { id: 3, title: 'blonde', artist: 'Frank Ocean', albumArt: '/albumArt/blonde.jpeg' },
    { id: 4, title: 'Deep End Mix Tape', artist: 'Tabber', albumArt: '/albumArt/Deep End Mix Tape.jpeg' },
    { id: 5, title: 'tellusaboutyourself', artist: '백예린', albumArt: '/albumArt/tellusaboutyourself.jpeg' },
  ]

   const [likes, setLikes] = useState(Array(songs.length).fill(0));

  const handleLike = () => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  return (
    <Wrapper>
      <Song
        handleNext={handleNext}
        handlePrev={handlePrev}
        title={songs[index].title}
        artist={songs[index].artist}
        albumArt={songs[index].albumArt}
        like={likes[index]}
        onLike={handleLike}
      />
    </Wrapper>
  )
}

export default App
