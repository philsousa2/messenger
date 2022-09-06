import React from 'react'
import Image from 'next/image'
import { Container } from "../styles/footer";

function Footer() {
  return (
    <Container>
      <Image  src="/logobranca.png" alt="Logo" width={250} height={80} margin-left={50} />
      
      <h3>Serviços de encomenda expressa nacional e internacional
Exportação e importação pelo Regime de Tributação Simplificada</h3>
<div className="linha"></div>
<h4>© Copyright 2022 by Messenger Express | Desenvolvido por Phelipe Sousa e Bruno Tubio</h4>
    </Container>
  )
}

export default Footer