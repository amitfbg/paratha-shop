import "./App.css";
import Header from "./components/Header/Header";
import ParathaCard from "./components/ParathaCard/ParathaCard";
import { ParathaList } from "./utils";
import styled from "styled-components";

const ParathaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  flex-wrap: wrap;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <ParathaContainer>
        {ParathaList.map((currObj) => {
          return <ParathaCard details={currObj} />;
        })}
      </ParathaContainer>
    </div>
  );
}

export default App;
