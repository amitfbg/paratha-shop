import "./App.css";
import Header from "./components/Header/Header";
import ParathaCard from "./components/ParathaCard/ParathaCard";
import { ParathaList } from "./utils";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./react-redux-store/store/configureStore";

const ParathaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  flex-wrap: wrap;
`;

function App() {
  const parathaListArray = Object.keys(ParathaList);
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <ParathaContainer>
          {parathaListArray?.map((currItem, idx) => {
            return <ParathaCard details={currItem} key={currItem + idx} />;
          })}
        </ParathaContainer>
      </Provider>
    </div>
  );
}

export default App;
