import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: 300px;
  width: 300px;
  border-radius: 15px;
  background-color: #f7eeda;
  color: #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
     &:hover {
        background-color: #e1ddd5;
    }
    
`;

export default function Song(props) {
    const { title, artist, albumArt } = props
  return (
    <Wrapper>
        <img src={albumArt} alt={`${title} album art`} style={{ width: '150px', height: '150px' }} />
        <h3>{title}</h3>
        <p style = {{margin: '1px'}}>{artist}</p>
    </Wrapper>
  )
}
