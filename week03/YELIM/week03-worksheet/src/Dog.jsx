import styled from 'styled-components';

const Dog = ({ animalImage, setAnimalImage }) => {
  const fetchDogImage = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    setAnimalImage(data.message);
  };

  return (
    <>
      <StyledButton onClick={fetchDogImage}>
        <StyledIconSection>🐶</StyledIconSection>강아지 랜덤 불러오기
      </StyledButton>
    </>
  );
};

export default Dog;

const StyledButton = styled.button`
  padding: 20px;
`;
const StyledIconSection = styled.div`
  font-size: 40px;
  padding: 10px;
`;
