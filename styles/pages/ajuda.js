import styled, { css } from "styled-components";

export const Container = styled.div`
width: 100%;
background: #FFF;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
flex-direction: column;

.compliance{
    width: 60%;
    margin: 20px 0 40px 0;
}

.summary{
    background: #00457A;
    color: #FFF;
}


.icon{
    color: #FFF;
    width: 25px;
    height: 25px;
}
.links{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;
}

.links h1{
    color: #00457A;
    margin: 10px 0 30px 0;
}
.links li{
    color: #00457A;
    margin: 20px;
}

.btn{
   margin-inline:20px;
   width: 200px;
   height: 100%;
}
.btns{
   margin-top:30px;
   display: flex;
}

@media(max-width: 1200px) {
    text-align: center;
    .accordion{
    width: 98%;
}

.btn{
   margin-inline:15px;
   width: 150px;
   height: 100%;
}

}
`;