import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 20px;
  border-radius: 12px;
  border: 1px solid #ddd;
  width: 200px;
  height: 200px;
`;

const Img = styled.img`
  width: 100px;
  height: auto;
  border-radius: 10px;
`;

export default function Song(props) {
  const { albumArt, title, artist } = props;
  return (
    <Wrapper>
      <Img src={albumArt} alt={title} />
      <div>제목 : {title}</div>

      <div>가수 : {artist}</div>
    </Wrapper>
  );
}
