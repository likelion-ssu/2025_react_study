import Song from './Song';
import styled from "styled-components"

const SongList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const songs = [
  {
    id: 1,
    title: "Messy",
    artist: "Rose",
    albumArt: "../img/Messy.jpg"
  },
  {
    id: 2,
    title: "As It Was",
    artist: "Harry Styles",
    albumArt: "../img/AsItWas.jpg"
  },
  {
    id: 3,
    title: "Chasing Fire",
    artist: "Lauv",
    albumArt: "../img/ChasingFire.jpg"
  },
  {
    id: 4,
    title: "Old Phone",
    artist: "Ed Sheeran",
    albumArt: "../img/OldPhone.jpg"
  },
];


function App() {
  const eachSong = songs.map(song => {
    return (
      <Song title={song.title} artist={song.artist} albumArt={song.albumArt} />
    );
  });

  return (
    <SongList>{eachSong}</SongList>
  );
}

export default App
