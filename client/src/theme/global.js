import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  :root {
    --blue: #007bff;
    --yellow: #ffc107;
    --white: #fff;
    --gray: #6c757d;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --padding-x: 1rem;
    --padding-y: 0.5rem;
  }

  body {
    align-items: center;
    background: var(--gray);
    color: var(--white);
    display: flex;
    flex-direction: column;
    font-family: var(--font-family-sans-serif);
    height: 100vh;
    justify-content: center;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }
  
  #root {
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
  `

export const theme = {
  breakpoints: {
    desktop: '1025px',
    laptop: '768px',
    mobile: '320px',
    tablet: '481px',
  },
}
