import React, { useState } from 'react'
import { Container } from "../styles/pages/rastreamento";


function Rastreamento() {

  const [formulario, setFormulario] = useState({
    rastreamento: ""
   })

  // const [dados, setDados] = useState([]);

  const valorInput = e => setFormulario({ ...formulario, [e.target.name]: e.target.value})

  const enviarRastreamento = async e => {
    e.preventDefault();

  {
    const response = await fetch("/rastreamentoMessenger/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({formulario})
    })
    const result = await response.json();
    setDados(result[0].data[0].dados);
    console.log(result);
    console.log(dados);
   ;
  }

  }

  return (
    <Container>
    <form className='formulario' onSubmit={enviarRastreamento}>
        <h1>Rastreamento</h1>
        <p>As informações exibidas no sistema de rastreamento são relativas aos locais onde as atualizações são feitas, não implicando, portanto, registro dos locais por onde as cargas transitam. Para mais informações, consulte a Central de Serviços.</p>
    <input type="text" className="input" name="rastreamento" placeholder="Minuta/ Nota Fiscal/ Pedido/ CT-e" onChange={valorInput} required />
    <button  type="submit" className="btn"> Buscar </button>   
    </form>
    </Container>
  )
}

export default Rastreamento