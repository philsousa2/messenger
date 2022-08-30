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

.slide-container{
  margin-top: -5px;
}
  
  .each-slide-effect > div {
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 500px;
}

.each-slide-effect span {
  padding: 20px;
  font-size: 20px;
  background: #efefef;
  text-align: center;
}
`