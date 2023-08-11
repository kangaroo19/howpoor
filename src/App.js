import { styled } from "styled-components";
import Router from "./Router";
import useWindowWidth from "./hooks/useWindowWidth";
import { useEffect, useState } from "react";
import Ramche from './fonts/Ramche.css'

function App() {
  const innerWidth=useWindowWidth()
  return (
    <Wrapper>
      <Inner>
        <Router></Router>
      </Inner>
    </Wrapper>
  );
}

export default App;


const Wrapper=styled.div`
  font-family: Ramche;
  color:white;
  height:100vh;
  background-color:#212529;
  margin:0 auto;
  @media only screen and (min-width:500px){
    max-width:500px;
}

`

const Inner=styled.div`
  height:100%;
`



// https://www.cssscript.com/
//https://nostalgic-css.github.io/NES.css/