import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`


export default function Cat() {
  const [imageUrl, setUrl] = useState("");
  const [isLoading, setLoading] = useState(false);

  async function getCatImage() {
    setLoading(true);
    try {
      const getCatResponse = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setUrl(getCatResponse.data[0].url);
    } catch (error) {
      console.error("get cat image error!\n", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCatImage();
  }, []);

  if (isLoading) {
    return (
      <Container>
        <h1>랜덤 고양이 사진</h1>
        <button onClick={getCatImage}>새로운 고양이 사진</button>
        로딩중...
      </Container>
    );
  }
  return (
    <Container>
      <h1>랜덤 고양이 사진</h1>
      <button onClick={getCatImage}>새로운 고양이 사진</button>
      {imageUrl && <img src={imageUrl} alt="A random cat" width="300"/>}
    </Container>
  );
}