import styled from "styled-components";
import Cat from "./Cat";
import Dog from "./Dog";

const Container=styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

function App() {
  return (
    <Container>
      <Cat></Cat>
      <Dog></Dog>
    </Container>
  );
}

export default App;
