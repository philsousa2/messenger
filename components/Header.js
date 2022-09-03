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
        <Link href="/contato">Fale conosco : +55 (21) 2142-8000</Link>
        <a>|</a>
        <a href="https://web.archive.org/web/20220127053821/https://messenger.brudam.com.br/site/">Portal do Cliente</a>
        <a>|</a>
        <a href="https://web.archive.org/web/20220127053821/https://messenger.brudam.com.br/agente/loga.php">Portal do Agente</a>
      </div>
      </div>
     
    
    </Container>
    
  )
}

export default Header