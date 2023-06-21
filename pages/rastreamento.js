import React, { useState } from 'react';
import { Container } from "../styles/pages/rastreamento";

function Rastreamento() {
  const [formulario, setFormulario] = useState({
    rastreamento: ""
  });

  const [dados, setDados] = useState([]);
  const [erro, setErro] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  const valorInput = e => setFormulario({ ...formulario, [e.target.name]: e.target.value });

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
        setErro(null);
        setMostrarFormulario(false);
      } else {
        setDados([]);
        setErro("Número não encontrado");
        setMostrarFormulario(true);
      }
    } catch (error) {
      console.error(error);
      setDados([]);
      setErro("Ocorreu um erro ao buscar o rastreamento");
      setMostrarFormulario(true);
    }
  };

  const novoRastreamento = () => {
    setFormulario({ rastreamento: "" });
    setDados([]);
    setErro(null);
    setMostrarFormulario(true);
  };

  return (
    <Container>
      {mostrarFormulario ? (
        <form className='formulario' onSubmit={enviarRastreamento}>
          <h1>Rastreamento</h1>
          <p>As informações exibidas no sistema de rastreamento são relativas aos locais onde as atualizações são feitas, não implicando, portanto, registro dos locais por onde as cargas transitam. Para mais informações, consulte a Central de Serviços.</p>
          <input type="text" className="input" name="rastreamento" placeholder="Minuta/ Nota Fiscal/ Pedido/ CT-e" onChange={valorInput} required />
          <button type="submit" className="btn">Buscar</button>
        </form>
      ) : (
        <>
          {erro && (
            <div className="erro">{erro}</div>
          )}

          {dados && dados.length > 0 ? (
            <>
              {dados.map(item => (
                <div key={item.id}>
                  <h2>{item.tipo}</h2>
                  <p>Número: {item.numero}</p>
                  <p>Status: {item.status}</p>
                  <p>Data: {item.data}</p>
                  <p>Descrição: {item.descricao}</p>
                  {/* Renderizar outras informações conforme necessário */}
                </div>
              ))}
              <button className="btn" onClick={novoRastreamento}>Realizar novo rastreamento</button>
            </>
          ) : (
            <div className="erro">
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
