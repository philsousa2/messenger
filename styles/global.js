import { createGlobalStyle , css} from 'styled-components';



export const GlobalStyle = createGlobalStyle`
 
 @font-face {
  
  font-family: 'Calibri';
  src: url("./fonts/calibri.ttf");
}
    


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Calibri, sans-serif;
   
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
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

}
  
.img1{
  background-image: url('./1.jpg');
  animation: img1 7s ease ;
}
.img2{
  background-image: url('./2.jpg');
  animation: img2 7s ease ;
}
.img3{
  background-image: url('./3.jpg');
  animation: fotomovimento 6s ease-out ;
  
}
.img4{
  background-image: url('./4.jpg');
  animation: fotomovimento 6s ease-out ;
}



@keyframes img1 {
  0% {
    background-image: url('./1.jpg');
    background-position: bottom;

    }
       
    100%{
      background-image: url('./1.jpg');
      background-position: top;
    } 
    }

    
@keyframes img2 {
  0% {
    background-image: url('./2.jpg');
    background-position: bottom;

    }
       
    100%{
      background-image: url('./2.jpg');
      background-position: top;
    } 
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

.icon{
  width: 40px;
  height: 40px;
}
@media(max-width: 1100px) {
  .info{
margin-left: 0;
.titulo{
  font-size: 8px;
}
.infotxt{
  font-size: 12px;
}

.icon{
  width: 20px;
  height: 20px;
}
}
}

`
