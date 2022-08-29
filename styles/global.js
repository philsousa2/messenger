import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    
  }
  body {
    background: #fff;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  
  ul{
    list-style:none;
  }
  img {
    width: 100%;
    max-width: 100%;
  }

.paginas{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
}
.menu{
  margin-top: -50px;
}
`