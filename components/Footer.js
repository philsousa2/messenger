import React from 'react'
import Image from 'next/image'
import { Container } from "../styles/footer";

function Footer() {
  return (
    <Container>
      <Image  src="/logocinza.png" alt="Logo" width={250} height={80} margin-left={50} />
      
      <h3>Serviços de encomenda expressa nacional e internacional
Exportação e importação pelo Regime de Tributação Simplificada</h3>
<div className="linha"></div>
<h4>São Paulo (11) 2203-9531 - Rio de Janeiro (21) 2142-8000 - Macaé (22) 2773-3250</h4>
    </Container>
  )
}

export default Footer