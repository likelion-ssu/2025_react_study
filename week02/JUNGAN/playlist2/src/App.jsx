// import { useState } from 'react'
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
  const songs = [
    { id: 1, title: 'astroworld', artist: 'Travis Scott', albumArt: '/albumArt/astroworld.jpeg' },
    { id: 2, title: 'BEIGE', artist: '키드밀리', albumArt: '/albumArt/BEIGE.jpeg' },
    { id: 3, title: 'blonde', artist: 'Frank Ocean', albumArt: '/albumArt/blonde.jpeg' },
    { id: 4, title: 'Deep End Mix Tape', artist: 'Tabber', albumArt: '/albumArt/Deep End Mix Tape.jpeg' },
    { id: 5, title: 'tellusaboutyourself', artist: '백예린', albumArt: '/albumArt/tellusaboutyourself.jpeg' },
  ]

  return (
    <Wrapper>
      {songs.map(song => (
        <Song key={song.id} title={song.title} artist={song.artist} albumArt={song.albumArt} />
      ))}
    </Wrapper>
  )
}

export default App
