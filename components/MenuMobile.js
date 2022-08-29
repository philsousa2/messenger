import React, { useEffect, useState } from 'react'
import { Container } from "../styles/menuMobile";
import { IoClose } from 'react-icons/io5';
import Link from 'next/link'


function MenuMobile({menuVisible, setMenuVisible}) {

  useEffect(() => {
    const e = document.getElementById("cont");
    e.style.animation = "none";
    e.style.opacity = 0;
    
    setTimeout(function() {
     e.style.opacity = 1;
       e.style.animation = "";
    }, 200);

  }, [menuVisible])


const [close, setClose] = useState(false)

useEffect( () => {
  const c = document.getElementById("cont");
   setClose(false);
    c.style.animation = "close 1s";
    c.style.opacity = 0;
    setTimeout(function() {
     setMenuVisible(false);
    }, 300);

}, [close])


  return (
    <Container id="cont" menuVisible={menuVisible}> 
       <IoClose size={45} onClick={()=> setClose(true)}/>
        <nav onClick={()=> setClose(true) }>
            <Link href="/">Home</Link>
            <Link href="/Servicos">Serviços</Link>
            <Link href="/Localidades">Localidades</Link>
            <Link href="/Contato">Contato</Link>
            <Link href="/">Rastrear</Link>
            <Link href="/Informacao">Informações</Link>
        </nav>
    </Container>
  )
}

export default MenuMobile