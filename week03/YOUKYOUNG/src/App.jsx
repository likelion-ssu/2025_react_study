import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 25px;
  border: 1px solid #ddd;
  background-color: #fff2d9;
  border-radius: 10px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const CatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const DogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

function App() {
  const [catImage, setCatImage] = useState(null);
  const [dogImage, setDogImage] = useState(null);

  async function fetchCat() {
    try {
      const res = await axios.get("https://api.thecatapi.com/v1/images/search");
      setCatImage(res.data[0].url);
    } catch (err) {
      alert("고양이 로딩 실패:", err);
    }
  }

  async function fetchDog() {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImage(res.data.message);
    } catch (err) {
      alert("강아지 로딩 실패:", err);
    }
  }

  useEffect(() => {
    fetchCat();
    fetchDog();
  }, []);

  return (
    <>
      <Title>강아지 & 고양이 사진 </Title>
      <Wrapper>
        <CatWrapper>
          {catImage && <img src={catImage} alt="고양이" height={300} />}{" "}
          <Button onClick={fetchCat}>🐱</Button>
        </CatWrapper>
        <DogWrapper>
          {dogImage && <img src={dogImage} alt="강아지" width={300} />}{" "}
          <Button onClick={fetchDog}>🐶</Button>
        </DogWrapper>
      </Wrapper>
    </>
  );
}

export default App;
