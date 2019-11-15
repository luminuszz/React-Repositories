import React, { Fragment } from "react";
import "./App.css";
import styled from "styled-components";
import GlobalStyle from "./styles/global";
import Main from "./pages/main";

const App = () => (
  <Fragment>
    <GlobalStyle />
    <div className="App">
      <Main />
    </div>
  </Fragment>
);

export default App;
