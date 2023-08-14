import styled from "styled-components";
import bg from './img/bg-2.png'
import { MainLayout } from "./styles/Layouts";
import Orb from './components/Button/Orb/Orb'

function App() {
  return (
    <div className="App">
      <AppStyled bg={bg} className="App">
        <Orb/>
        <MainLayout>
          <h1>Hello</h1>
        </MainLayout>
      </AppStyled>
    </div>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`;

export default App;
