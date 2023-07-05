import React, { useState } from 'react';
import { Container } from "../styles/pages/cotacao";
import TextField from '@mui/material/TextField';

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
    estadoDestinatario: "",
    paisDestinatario: "",
    destinatario: "",
    hora1: "",
    hora2: "",
    dataEntrega: "",
    horaEntrega1: "",
    horaEntrega2: "",
    obs: ""
  });

  const valorInput = (e) =>
    setFormulario({ ...formulario, [e.target.name]: e.target.value });

  const enviarCotacao = async (e) => {
    e.preventDefault();
    console.log(formulario);

    const response = await fetch("/cotacaoMessenger/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formulario),
    });
    const result = await response.json();
    console.log(result);

    if (response.ok) {
      setFormulario({
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
        estadoDestinatario: "",
        paisDestinatario: "",
        destinatario: "",
        hora1: "",
        hora2: "",
        dataEntrega: "",
        horaEntrega1: "",
        horaEntrega2: "",
        obs: "",
      });

      alert("Cotação enviada com sucesso!");
    } else {
      alert("Ocorreu um erro ao enviar a cotação. Por favor, tente novamente.");
    }
  };

  return (
    <Container>
      <h1>Solicite uma Cotação</h1>

      <form className="formulario" onSubmit={enviarCotacao}>
        <h2>Todos os campos são obrigatórios</h2>

        <h3>Dados do solicitante</h3>
        <input
          type="text"
          className="input"
          name="nome"
          placeholder="Seu Nome"
          value={formulario.nome}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input"
          name="numeroConta"
          placeholder="CNPJ/CPF ou Conta Pagadora"
          value={formulario.numeroConta}
          onChange={valorInput}
          required
        />
        <input
          type="tel"
          className="input"
          name="telefone"
          placeholder="Telefone"
          value={formulario.telefone}
          onChange={valorInput}
          required
        />
        <input
          type="email"
          className="input"
          name="email"
          placeholder="Email"
          value={formulario.email}
          onChange={valorInput}
          required
        />

        <br />

        <h3>Dados da Carga</h3>
        <br />
        <select
          className="embalagem"
          name="embalagem"
          value={formulario.embalagem}
          onChange={valorInput}
          required
        >
          <option value="" hidden>
            Tipo de Embalagem
          </option>
          <option value="CAIXA">CAIXA</option>
          <option value="PAC">PAC</option>
        </select>
        <div className="dimencao">
          <label>Peso:</label>
          <input
            type="text"
            className="input2"
            name="peso"
            placeholder="000kg"
            value={formulario.peso}
            onChange={valorInput}
            required
          />
          <label htmlFor="">Dimensões em cm:</label>
          <input
            type="text"
            className="input2"
            name="altura"
            placeholder="Altura"
            value={formulario.altura}
            onChange={valorInput}
            required
          />
          <label>x</label>
          <input
            type="text"
            className="input2"
            name="largura"
            placeholder="Largura"
            value={formulario.largura}
            onChange={valorInput}
            required
          />
          <label>x</label>
          <input
            type="text"
            className="input2"
            name="profundidade"
            placeholder="Profundidade"
            value={formulario.profundidade}
            onChange={valorInput}
            required
          />
        </div>

        <input
          type="text"
          className="input3"
          name="notaFiscal"
          placeholder="Nota Fiscal"
          value={formulario.notaFiscal}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input3"
          name="quantidade"
          placeholder="Quantidade de Volumes"
          value={formulario.quantidade}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input3"
          name="valor"
          placeholder="Valor da Mercadoria"
          value={formulario.valor}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input"
          name="conteudo"
          placeholder="Descrição do Conteúdo"
          value={formulario.conteudo}
          onChange={valorInput}
          required
        />

        <br />
        <h3>Dados do Transporte</h3>
        <h4>ORIGEM:</h4>
        <input
          type="text"
          className="input3"
          name="cepRemetente"
          placeholder="CEP"
          value={formulario.cepRemetente}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input"
          name="endereco"
          placeholder="Endereço de Origem"
          value={formulario.endereco}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input3"
          name="complemento"
          placeholder="Complemento"
          value={formulario.complemento}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input3"
          name="cidade"
          placeholder="Cidade"
          value={formulario.cidade}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input3"
          name="estado"
          placeholder="Estado"
          value={formulario.estado}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input3"
          name="pais"
          placeholder="País"
          value={formulario.pais}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input"
          name="remetente"
          placeholder="CPF/CNPJ REMETENTE"
          value={formulario.remetente}
          onChange={valorInput}
          required
        />

        <h4>DESTINO:</h4>
        <input
          type="text"
          className="input3"
          name="cepDestinatario"
          placeholder="CEP"
          value={formulario.cepDestinatario}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input"
          name="enderecoDestinatario"
          placeholder="Endereço de Destino"
          value={formulario.enderecoDestinatario}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input3"
          name="complementoDestinatario"
          placeholder="Complemento"
          value={formulario.complementoDestinatario}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input3"
          name="cidadeDestinatario"
          placeholder="Cidade"
          value={formulario.cidadeDestinatario}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input3"
          name="estadoDestinatario"
          placeholder="Estado"
          value={formulario.estadoDestinatario}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input3"
          name="paisDestinatario"
          placeholder="País"
          value={formulario.paisDestinatario}
          onChange={valorInput}
          required
        />
        <input
          type="text"
          className="input"
          name="destinatario"
          placeholder="CPF/CNPJ DESTINATÁRIO"
          value={formulario.destinatario}
          onChange={valorInput}
          required
        />

        <h4>Horário da coleta</h4>
        <span className="txt">de</span>
        <input
          type="text"
          className="inputh"
          name="hora1"
          placeholder="00:00"
          value={formulario.hora1}
          onChange={valorInput}
          required
        />
        <span className="txt">até</span>
        <input
          type="text"
          className="inputh"
          name="hora2"
          placeholder="00:00"
          value={formulario.hora2}
          onChange={valorInput}
          required
        />
        <br />

        <h4>ENTREGA:</h4>
        <input
          type="text"
          className="input3"
          name="dataEntrega"
          placeholder="Data da Entrega 'DD/MM/YYYY'"
          value={formulario.dataEntrega}
          onChange={valorInput}
          required
        />
        <span className="txt">de</span>
        <input
          type="text"
          className="inputh"
          name="horaEntrega1"
          placeholder="00:00"
          value={formulario.horaEntrega1}
          onChange={valorInput}
          required
        />
        <span className="txt">até</span>
        <input
          type="text"
          className="inputh"
          name="horaEntrega2"
          placeholder="00:00"
          value={formulario.horaEntrega2}
          onChange={valorInput}
          required
        />
        <br />

        <h3>Observações</h3>
        <input
          type="text"
          className="input"
          name="obs"
          placeholder="Observações"
          value={formulario.obs}
          onChange={valorInput}
        />

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}

export default Cotacao;
