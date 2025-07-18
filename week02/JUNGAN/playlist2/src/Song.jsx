import React from 'react'
import styled from 'styled-components'
// import { useState } from 'react'

const ButtonWrapper = styled.div`
  display: flex;    
  flex-direction: row;
  `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: 400px;
  width: 400px;
  border-radius: 15px;
  background-color: #f7eeda;
  color: #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
     &:hover {
        background-color: #e1ddd5;
    }
  img {
    border-radius: 10px;
    width: 250px;
    height: 250px;
  }
  button {
    position: absolute;
    bottom: 300px;
    left: 40%; 

  }
`;

export default function Song(props) {
    const { title, artist, albumArt, handleNext, handlePrev, like, onLike} = props;
    // const [like, setLike] = useState(0);
  return (
    <ButtonWrapper>
      <button onClick={handlePrev} style={{ margin: '5px' }}>Prev</button>
      <Wrapper>
        <button onClick={onLike} style={{ margin: '5px' }}>
          {like} ❤️
        </button>
        <img src={albumArt} alt={`${title} album art`} />
        <h3>{title}</h3>
        <p style = {{margin: '1px'}}>{artist}</p>
    </Wrapper>
      <button onClick={handleNext} style={{ margin: '5px' }}>Next</button>
    </ButtonWrapper>
    
  )
}
