import React from 'react'
import { Container } from "../styles/pages/rastreamento";
function rastreamento() {
  return (
    <Container>
    <div className='formulario'>
        <h1>Rastreamento</h1>
        <p>As informações exibidas no sistema de rastreamento são relativas aos locais onde as atualizações são feitas, não implicando, portanto, registro dos locais por onde as cargas transitam. Para mais informações, consulte a Central de Serviços.</p>
    <input type="text" className="input" name="rastreamento" placeholder="Minuta/ Nota Fiscal/ Pedido/ CT-e" required />
    <button  type="submit" className="btn"> Buscar </button>   
    </div>
    </Container>
  )
}

export default rastreamento