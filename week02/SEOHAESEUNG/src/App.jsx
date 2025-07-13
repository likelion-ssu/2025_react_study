import { useState } from 'react'
import Song from './Song';
import {songs} from './dataSong'


export default function App() {
  const [index, setIndex] = useState(0);
  const [likeNum, setLikeNum] = useState(songs[index].likes);

  function handleNext() {
    if(index < songs.length - 1)
    setIndex(i => i + 1);
    setLikeNum(songs[index].likes);
  }

  function handlePrev() {
    if(index > 0)
    setIndex(i => i - 1);
    setLikeNum(songs[index].likes);
  }

  function handleLike() {
    setLikeNum(likeNum + 1);
  }

  let eachSong = songs[index];

  return (
    <div>
      <button onClick={handlePrev}>prev</button>
      <Song title={eachSong.title} artist={eachSong.artist} albumArt={eachSong.albumArt} likeNum={likeNum}
      buttonFunction={handleLike}></Song>
      <button onClick={handleNext}>next</button>
    </div>
  );
}

