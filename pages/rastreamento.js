import React, { useState } from 'react';
import { Container } from "../styles/pages/rastreamento";

function Rastreamento() {
  const [formulario, setFormulario] = useState({
    rastreamento: ""
  });

  const [dados, setDados] = useState([]);
  const [dadosDomumento, setDadosdocumento] = useState();
  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  const valorInput = e => {
    const inputNumero = e.target.value;
    setFormulario({ ...formulario, [e.target.name]: inputNumero });
  };

  const bloquearCaracteresNaoNumericos = e => {
    const tecla = e.key;
    if (isNaN(tecla)) {
      e.preventDefault();
    }
  };

  const enviarRastreamento = async e => {
    e.preventDefault();

    try {
      const response = await fetch("/rastreamentoMessenger/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formulario })
      });

      const result = await response.json();

      if (result.status === 1) {
        setDados(result.data[0].dados);
        setDadosdocumento(result.data[0].documento)
        setMostrarFormulario(false);
       
      } else {
        setDados([]);
        setMostrarFormulario(true);
      }
    } catch (error) {
      console.error(error);
      setDados([]);
      setMostrarFormulario(true);
    }
  };

  const novoRastreamento = () => {
    setFormulario({ rastreamento: "" });
    setDados([]);
    setMostrarFormulario(true);
  };

  return (
    <Container>
      {mostrarFormulario ? (
        <form className='formulario' onSubmit={enviarRastreamento}>
          <h1>Rastreamento</h1>
          <p>Para consultas basta colocar o número de rastreio (e-WB, MD, NFe, AWB ou outro) e pressionar buscar.
          As informações exibidas no sistema de rastreamento são relativas aos locais onde as atualizações são feitas, não implicando, portanto, registro dos locais por onde as cargas transitam. Para mais informações, constate a Central de Serviços.</p>
          <input type="tel" className="input" name="rastreamento" placeholder="Informe o número do pedido ou da minuta." onChange={valorInput} onKeyPress={bloquearCaracteresNaoNumericos} required />
          <button type="submit" className="btn">Buscar</button>
        </form>
      ) : (
        <>
          {dados && dados.length > 0 ? (
            <div className="Info">
              <h1>{dadosDomumento}</h1>
              {dados.map(item => (
                <div className="itensInfo" key={item.id}>
                  <p><b>Data/Hora:</b> {item.data} <br/>
                  <b>Status:</b> {item.descricao}<br/>
                  <b>Entregue para:</b> {item.entrega_nome}<br/>
                  <b>Grau:</b> {item.entrega_grau}</p>
                </div>
              ))}
              <button className="btn" onClick={novoRastreamento}>Realizar novo rastreamento</button>
            </div>
          ) : (
            <div className="Msgerro">
              <h1>Número não encontrado</h1>
              <button className="btn" onClick={novoRastreamento}>Realizar novo rastreamento</button>
            </div>
          )}
        </>
      )}
    </Container>
  );
}

export default Rastreamento;
