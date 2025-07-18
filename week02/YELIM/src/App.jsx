import './App.css';
import Play from './Play';
import { data } from './Data';
import styled from 'styled-components';
import { useState } from 'react';

function App() {
  const [nowPlay, setNowPlay] = useState(1); // id겠지
  const isPrevDisabled = nowPlay > 1 ? false : true;
  const isNextDisabled = data.find((song) => song.id === nowPlay + 1) ? false : true;
  const selectedSong = data.find((song) => song.id === nowPlay);

  console.log('prevdisabled', isPrevDisabled);
  console.log('nextdisabled', isNextDisabled);
  console.log(nowPlay, isNextDisabled);
  return (
    <>
      <div>
        <StyledTitle>Yelim's Music</StyledTitle>
        <Play
          nowSong={selectedSong}
          setNowPlay={setNowPlay}
          isNextDisabled={isNextDisabled}
          isPrevDisabled={isPrevDisabled}
        ></Play>
      </div>
    </>
  );
}

export default App;

const StyledTitle = styled.div`
  font-size: 20px;
  padding: 10px 20px;
`;

const StyledMusic = styled.div``;
