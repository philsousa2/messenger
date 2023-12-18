import React from 'react'
import Image from 'next/image'
import { Container } from "../styles/footer";

function Footer() {
  return (
    <Container>
      <div className='img'>  
        <Image  src="/logobranca.png" alt="Logo" width={250} height={80} margin-left={50} />
      </div>
      <div className="linha2"></div>
      <div className="texto">
      <h3>Serviços de encomenda expressa nacional e internacional
        Exportação e importação pelo Regime de Tributação Simplificada</h3>
        <div className="linha"></div>
        <h4>© Copyright 2022 by Messenger Express | Desenvolvido por Phelipe Sousa e Ramon Borzoni</h4>
      </div>
    </Container>
  )
}

export default Footer