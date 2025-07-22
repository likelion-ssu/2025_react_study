import { useEffect, useState } from 'react';

const AnimalViewer = () => {
  const [animal, setAnimal] = useState('');
  useEffect(() => {
    const fetchAnimalImage = async () => {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      setAnimal(data[0].url);
    };

    fetchAnimalImage();
  }, []);
  
  return (
    <>
      동물 보여주기
      <img src={animal}></img>
    </>
  );
};

export default AnimalViewer;
