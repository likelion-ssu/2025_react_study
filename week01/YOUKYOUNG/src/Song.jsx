import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

const Img = styled.img`
  width: 180px;
  height: auto;
`;

export default function Song(props) {
  const { image, title, artist } = props;
  return (
    <Wrapper>
      <Img src={image} alt={title} />
      <div>제목 : {title}</div>
      <div>가수 : {artist}</div>
    </Wrapper>
  );
}
