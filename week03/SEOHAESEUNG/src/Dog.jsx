import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`

export default function Dog() {
  const [imageUrl, setUrl] = useState("");
  const [isLoading, setLoading] = useState(false);

  async function getDogImage() {
    setLoading(true);
    try {
      const getDogResponse = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setUrl(getDogResponse.data.message);
    } catch (error) {
      console.error("get dog image error!\n", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDogImage();
  }, []);

  if (isLoading) {
    return (
      <Container>
        <h1>랜덤 강아지 사진</h1>
        <button onClick={getDogImage}>새로운 강아지 사진</button>
        로딩중...
      </Container>
    );
  }
  return (
    <Container>
      <h1>랜덤 강아지 사진</h1>
      <button onClick={getDogImage}>새로운 강아지 사진</button>
      {imageUrl && <img src={imageUrl} alt="A random dog" width="300" />}
    </Container>
  );
}