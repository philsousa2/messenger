import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from "../styles/header";
function Header() {
  return (
    <Container>
      <div className="LogoContainer">
        <div className="Logo"></div>

        <div className="img">
        <Image  src="/logobranca.png" alt="Logo" width={250} height={80} margin-left={50} />
        </div>
        
        <div className="LogoFinal"></div>

        <div className="Contatos">
        <Link href="/">Fale conosco : +55 (21) 2142-8000</Link>
        <a href="/">Portal do Cliente</a>
        <a href="/">Portal do Agente</a>
      </div>
      </div>
     
    
    </Container>
    
  )
}

export default Header