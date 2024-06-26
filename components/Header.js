import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from "../styles/header";
import { MdOutlineLocalShipping, MdOutlinePersonalInjury } from "react-icons/md";

function Header() {
  return (
    <Container>
      <div className="LogoContainer">
        <div className="Logo"></div>
        <Link href="/">
        <div className="img">
        <Image  src="/logomarca.png" alt="Logo" width={280} height={95} margin-left={50} />
        </div>
        </Link>
        <Link href="/">
        <div className="img2">
        <Image priority  src="/logobranca.png" alt="Logo" width={280} height={95} margin-left={50} />
        </div>
        </Link>
        
        <div className="LogoFinal"></div>

        <div className="Contatos">
        <Image  src="/whatsapp-logo-png.png" alt="Logo" width={30} height={30} margin-left={50} />
        <a href="https://api.whatsapp.com/send?phone=552121428080"  target="_blank" rel="noreferrer">   +55 (21) 2142-8000</a>
        <a>|</a>
        
        <MdOutlineLocalShipping size={30}/>
        <a href="https://messenger.brudam.com.br/site/"  target="_blank" rel="noreferrer"> Portal do Cliente</a>
        <a>|</a>

        <MdOutlinePersonalInjury size={30}/>
        <a href="https://messenger.brudam.com.br/agente/loga.php"  target="_blank" rel="noreferrer">Portal do Agente</a>
      </div>
      </div>
     
    
    </Container>
    
  )
}

export default Header