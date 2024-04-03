import React, { useState } from 'react'
import { Container } from "../styles/pages/cotacao";
import NumberFormat from 'react-number-format';

function Cotacao() {

  const [formulario, setFormulario] = useState({
    nome: "",
    numeroConta: "",
    telefone: "",
    email: "",

    embalagem: "",
    peso: "",
    altura: "",
    largura: "",
    profundidade: "",
    notaFiscal: "",
    quantidade: "",
    valor: "",
    conteudo: "",

    cepRemetente: "",
    endereco: "",
    complemento: "",
    cidade: "",
    estado: "",
    pais: "",
    remetente: "",

    cepDestinatario: "",
    enderecoDestinatario: "",
    complementoDestinatario: "",
    cidadeDestinatario: "",
    estacoDestinatario: "",
    paisDestinatario: "",
    destinatario: "",

    hora1: "",
    hora2: "",

    dataEntrega: "",
    horaEntrega1: "",
    horaEntrega2: "",
    obs: ""

  });

  const valorInput = (e) => setFormulario({ ...formulario, [e.target.name]: e.target.value })

  const enviarCotacao = async e => {
    e.preventDefault();

    try {
      const response = await fetch("/cotacaoMessenger/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formulario })
      });
      if (response.ok) {
        alert('Contação enviada com sucesso!');
        //window.location.reload()
        
      } else {
        throw new Error('Ocorreu um erro ao solicitar a cotação.');
      }
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao solicitar a cotação. Por favor, tente novamente.');
    }
  };

  return (
    <Container>
      <h1>Solicite uma Cotação</h1>

      <form className="formulario" onSubmit={enviarCotacao}>
        <h2>Todos os campos são obrigatórios</h2>

        <h3>Dados do solicitante</h3>
        <input type="text" className="input" name="nome" placeholder="Seu Nome" onChange={valorInput} required />
        <input type="text" className="input" name="numeroConta" placeholder="CNPJ/CPF" onChange={valorInput} required />
        <input type="tel" className="input" name="telefone" placeholder="Telefone" onChange={valorInput} required />
        <input type="email" className="input" name="email" placeholder="Email" onChange={valorInput} required />

        <br />

        <h3>Dados da Carga</h3>
        <br />
        <select className="embalagem" name="embalagem" onChange={valorInput} required>
          <option value="selected" hidden>Tipo da Carga</option>
          <option value="Mercadoria">Mercadoria</option>
          <option value="Documento">Documento</option>
        </select>
        <div className="dimencao">
          <label>Peso:</label>
          <input type="text" className="input2" name="peso" placeholder="000g" onChange={valorInput} />
          <label htmlFor="">Dimensões em cm:</label>
          <input type="text" className="input2" name="altura" placeholder="Altura" onChange={valorInput} />
          <label>x</label>
          <input type="text" className="input2" name="largura" placeholder="Largura" onChange={valorInput} />
          <label>x</label>
          <input type="text" className="input2" name="profundidade" placeholder="Profundidade" onChange={valorInput} />
        </div>

        <input type="text" className="input3" name="notaFiscal" placeholder="Nota Fiscal" onChange={valorInput} required />
        <input type="text" className="input3" name="quantidade" placeholder="Quantidade de Volumes" onChange={valorInput} required />

        <NumberFormat
          value={formulario.valor}
          thousandSeparator="."
          decimalSeparator=","
          prefix="R$ "
          customInput={<input type="text" className="input3" name="valor" placeholder="Valor da Mercadoria" />}
          onValueChange={(values) => {
            const { formattedValue, value } = values;
            setFormulario({ ...formulario, valor: value });
          }} 
          required />
          
        <input type="text" className="input" name="conteudo" placeholder="Descrição do Conteúdo" onChange={valorInput} required />

        <br />
        <h3>Dados do Transporte</h3>
        <h4>ORIGEM:</h4>
        <input type="text" className="input3" name="cepRemetente" placeholder="CEP" onChange={valorInput} required />
        <input type="text" className="input" name="enderecoRemetente" placeholder="Endereço" onChange={valorInput} required />
        <input type="text" className="input3" name="complementoRemetente" placeholder="Complemento" onChange={valorInput} required />
        <input type="text" className="input3" name="cidadeRemetente" placeholder="Cidade" onChange={valorInput} required />
        <input type="text" className="input3" name="estadoRemetente" placeholder="Estado" onChange={valorInput} required />
        <input type="text" className="input3" name="paisRemetente" placeholder="País" onChange={valorInput} required />
        <input type="text" className="input" name="remetente" placeholder="CPF/CNPJ REMETENTE" onChange={valorInput} required />

        <h4>DESTINO:</h4>
        <input type="text" className="input3" name="cepDestinatario" placeholder="CEP" onChange={valorInput} required />
        <input type="text" className="input" name="enderecoDestinatario" placeholder="Endereço" onChange={valorInput} required />
        <input type="text" className="input3" name="complementoDestinatario" placeholder="Complemento" onChange={valorInput} required />
        <input type="text" className="input3" name="cidadeDestinatario" placeholder="Cidade" onChange={valorInput} required />
        <input type="text" className="input3" name="estadoDestinatario" placeholder="Estado" onChange={valorInput} required />
        <input type="text" className="input3" name="paisDestinatario" placeholder="País" onChange={valorInput} required />
        <input type="text" className="input" name="destinatario" placeholder="CPF/CNPJ DESTINATÁRIO" onChange={valorInput} required />

        <h4>COLETA</h4>
        <span className="txt">de</span>
        <input type="text" className="input3" name="dataColeta" placeholder="Data" onChange={valorInput} required />
        <span className="txt">de</span>
        <input type="text" className="inputh" name="hora1" placeholder="Hora Inicial" onChange={valorInput} required />
        <span className="txt">até</span>
        <input type="text" className="inputh" name="hora2" placeholder="Hora Final" onChange={valorInput} required />
        <br />

        <h4>ENTREGA:</h4>
        <input type="text" className="input3" name="dataEntrega" placeholder="Data" onChange={valorInput} required />
        <span className="txt">de</span>
        <input type="text" className="inputh" name="horaEntrega1" placeholder="Hora Inicial" onChange={valorInput} required />
        <span className="txt">até</span>
        <input type="text" className="inputh" name="horaEntrega2" placeholder="Hora Final" onChange={valorInput} required />

        <input type="text" className="input" name="obs" placeholder="Observações sobre a carga/manuseio/transporte" onChange={valorInput} required />
        <br />

        <button type="submit" className="btn"> Enviar </button>
      </form>
    </Container>


  )
}

export default Cotacao