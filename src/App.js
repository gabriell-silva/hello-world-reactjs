import React, { Fragment, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import {MdOutlineBrightness5, MdOutlineBrightness4} from "react-icons/md";
import {AiFillGithub} from "react-icons/ai"
import GlobalTheme from "./globals";
import styled from "styled-components";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
};

useEffect(() => {
  const localTheme = window.localStorage.getItem("theme");
  localTheme && setTheme(localTheme);
}, []);

return (
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <Fragment>
      <GlobalTheme />
        <ButtonChange onClick={toggleTheme}>
          {theme === "light" ? <MdOutlineBrightness5 size={20}/> : <MdOutlineBrightness4 size={20}/> }
        </ButtonChange>
        <Container>
          <Title> Hello World! </Title>
        </Container>
        <Footer>
          <p>Desenvolvido por gabriell-silva <AiFillGithub size={20}/></p>
        </Footer>
      </Fragment>
  </ThemeProvider>
);
}

const Container = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1 `
  font-size: 35px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ButtonChange = styled.button `
  position: absolute;
  width: 30px;
  height: 30px;
  margin: 25px;
  border-radius: 30px;
  border: none;
  background-color: blue;
  color: white;
`;

const Footer = styled.div `
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  text-align: center;
  border-top: 1px solid;
`;

export default App;