import React, { useState } from 'react';
import { Container } from "../styles/pages/rastreamento";

function Rastreamento({ rastreamento1 }) {
  const [formulario, setFormulario] = useState({
    rastreamento: ""
  });

  const [dados, setDados] = useState([]);

  const valorInput = e => setFormulario({ ...formulario, [e.target.name]: e.target.value });

  const enviarRastreamento = async e => {
    e.preventDefault();

    const response = await fetch("/rastreamentoMessenger/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ formulario })
    });

    const data = await response.json();
    if (data && data[0] && data[0].data && data[0].data[0] && data[0].data[0].dados) {
      setDados(data.data[0].dados);
    } else {
      setDados([]);
    }
  };

  return (
    <Container>
      <form className='formulario' onSubmit={enviarRastreamento}>
        <h1>Rastreamento</h1>
        <p>As informações exibidas no sistema de rastreamento são relativas aos locais onde as atualizações são feitas, não implicando, portanto, registro dos locais por onde as cargas transitam. Para mais informações, consulte a Central de Serviços.</p>
        <input type="text" className="input" name="rastreamento" placeholder="Minuta/ Nota Fiscal/ Pedido/ CT-e" onChange={valorInput} required />
        <button type="submit" className="btn"> Buscar </button>
      </form>

      <div>
        <ul>
          {dados.map((item, index) => (
            <li key={index}>
              <p>ID: {item.id}</p>
              <p>Tipo: {item.tipo}</p>
              <p>Número: {item.numero}</p>
              <p>Status: {item.status}</p>
              <p>Data: {item.data}</p>
              <p>Observação: {item.obs}</p>
              {/* Adicione outras informações que você deseja exibir */}
            </li>
          ))}
        </ul>
      </div>

    </Container>
  );
}

export default Rastreamento;
