import { useEffect, useState } from 'react';
import './App.css';
import Dog from './Dog';
import styled from 'styled-components';

function App() {
  const [animalImage, setAnimalImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchAnimalImage = async () => {
    setIsLoading(true);

    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    console.log('response', response);
    const data = await response.json();
    console.log('data', data);
    setAnimalImage(data[0].url);
    setIsLoading(false);
  };

  const fetchDogImage = async () => {
    setIsLoading(true);
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    console.log('res', res);
    const data = await res.json();
    console.log('data', data);
    setAnimalImage(data.message);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAnimalImage();
  }, []);

  return (
    <>
      <Styledtitle>고양이 ~? 강아지 ~? </Styledtitle>
      <StyledLoading>{isLoading ? '로딩 중입니다...' : ''}</StyledLoading>
      <StyledContentBox>
        <StyledImageBox>
          <StyledImg src={animalImage} alt="animal-image" />
        </StyledImageBox>
        <StyledButtonSection>
          <StyledButton onClick={fetchDogImage}>
            <StyledIconSection>🐶</StyledIconSection> 강아지 랜덤 불러오기
          </StyledButton>
          {/* <Dog animalImage={animalImage} setAnimalImage={setAnimalImage} /> */}
          <StyledButton onClick={fetchAnimalImage}>
            <StyledIconSection>😺</StyledIconSection> 고양이 랜덤 불러오기
          </StyledButton>
        </StyledButtonSection>
      </StyledContentBox>
    </>
  );
}

export default App;

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-itmes: center;
  width: 100%;
  height: 50px;
  // background-color: #ddd;
  font-family: 'Orbit', sans-serif;
`;

const Styledtitle = styled.div`
  font-family: 'Orbit', sans-serif;
  display: flex;
  // background-color: #ddd;
  font-size: 40px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
`;
const StyledImageBox = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  background-color: #ddd;
  justify-content: center;
  align-items: center;
  // padding: 20px;
  margin: 20px;
  overflow: hidden;
  border-radius: 20px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: yellow;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
`;

const StyledContentBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.button`
  font-family: 'Orbit', sans-serif;
  padding: 20px;
  margin: 20px 0;
  background-color: rgb(240, 255, 241);
  border: 2px solid rgb(50, 85, 53);
  border-radius: 20px;
`;

const StyledIconSection = styled.div`
  font-size: 40px;
  padding: 10px;
`;
