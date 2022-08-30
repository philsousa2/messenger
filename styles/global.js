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
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

}
  
  .each-slide-effect > div {
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  flex-direction: column;
  height: 500px;
}

.each-slide-effect span {
  padding: 20px;
  font-size: 20px;
  background: #efefef;
  text-align: center;
}

.titulo{
  color: #FFF;
  margin-bottom: 150px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  padding: 20px ;
}
.info{
  background: rgba(0, 0, 0, 0.5);
  padding: 20px ;
  border-radius: 15px;
  margin-left: 60%;
}
.infotxt{
  display: flex;
  flex-direction: row;
  color: #FFF;
}

@media(max-width: 1100px) {
  .info{
margin-left: 0;

}

}
`