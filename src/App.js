import React, { Fragment } from "react";
import "./App.css";
import styled from "styled-components";
import GlobalStyle from "./styles/global";
const Title = styled.h1``;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <div className="App"></div>
  </Fragment>
);

export default App;
