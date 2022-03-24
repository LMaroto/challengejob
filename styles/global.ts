import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');   

*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        height: 100vh;
    }

    :root{
        --white: #fff;
        --background-gray: #F8F7FC;
        --text-gray: #6D6C7B;
        --purple: #4F46BB;
    }
    body{
        display: flex;
        flex-direction: column;
        font-family: 'Inter', sans-serif;
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
    }
    `;
