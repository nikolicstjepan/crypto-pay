import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../lib/config";
import GlobalStyle from "../styles/GlobalStyle";

import AppWrapper from "./wrappers/AppWrapper";
import MainContentWrapper from "./wrappers/MainContentWrapper";
import SidebarWrapper from "./wrappers/SidebarWrapper";

import Header from "./Header";
import ContentController from "./ContentController";
import Loader from "./LoaderContainer";
import About from "./About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlobalStyle />
        <MainContentWrapper>
          <Header />
          <ContentController />
          <Loader />
        </MainContentWrapper>
        <SidebarWrapper>
          <About />
        </SidebarWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
