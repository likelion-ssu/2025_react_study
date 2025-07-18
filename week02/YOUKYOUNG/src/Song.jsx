import { useState, React } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border-radius: 12px;
  width: 200px;
  height: 200px;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 25px;
`;

const Img = styled.img`
  width: 300px;
  height: auto;
  /* border-radius: 10px; */
`;

const Buttondiv = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 50px;
`;

const Button = styled.button`
  background-color: white;
  border: 1px solid #ddd;
  cursor: pointer;
  border-radius: 10px;
  font-size: 16px;
`;

export default function Song(props) {
  const { albumArt, title, artist, onPrev, onNext } = props;

  return (
    <Wrapper>
      <Img src={albumArt} alt={title} />
      <Title>{title}</Title>
      <div>{artist}</div>

      <Buttondiv>
        <Button onClick={onPrev}>Prev</Button>
        <Button onClick={onNext}>Next</Button>
      </Buttondiv>
    </Wrapper>
  );
}
