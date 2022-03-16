import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500&family=Poppins:wght@200;300;400;500;600;700&display=swap');
  
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0px;
    padding: 0px;
    /* height: 100%; */
    font-family: "Poppins", sans-serif;
    background-color: #eee;

    a {
      cursor: pointer;
      text-decoration: none;
    }
  }

`; 