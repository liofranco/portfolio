import './App.css';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { dark, light } from './themes';
import {Helmet} from "react-helmet";

function App() {

  const [theme, setTheme] = useState('light')

  const Body = styled.div`
    background-color: ${(props) => props.theme.backgroundColor };
    color: ${(props) => props.theme.color };
  `

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <Helmet>
        <meta name="theme-color" content={theme === 'light' ? '#eeeeee' : '#1e1f20'} />
      </Helmet>
      <Body className="App">
        <Header setTheme={setTheme} theme={theme} />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </Body>
    </ThemeProvider>
  );
}

export default App;
