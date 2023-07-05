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

  const valorInput = e => setFormulario({ ...formulario, [e.target.name]: e.target.value });

  const enviarCotacao = async e => {
    e.preventDefault();
    console.log(
      formulario.nome, formulario.numeroConta, formulario.telefone, formulario.email,
      formulario.embalagem, formulario.peso, formulario.altura, formulario.largura, formulario.profundidade,
      formulario.notaFiscal, formulario.quantidade, formulario.valor, formulario.conteudo, formulario.cepRemetente,
      formulario.endereco, formulario.complemento, formulario.cidade, formulario.pais, formulario.remetente,
      formulario.cepDestinatario, formulario.enderecoDestinatario, formulario.complementoDestinatario, formulario.cidadeDestinatario, formulario.estadoDestinatario,
      formulario.paisDestinatario, formulario.destinatario, formulario.hora1, formulario.hora2, formulario.dataEntrega,
      formulario.horaEntrega1, formulario.horaEntrega2, formulario.obs
    );

    try {
      const response = await fetch("/cotacaoMessenger/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formulario })
      });
      const result = await response.json();
      console.log(result);

      // Limpar os campos do formulário
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
        obs: ""
      });

      // Exibir alerta de envio com sucesso
      alert("Cotação enviada com sucesso!");

    } catch (error) {
      console.error("Erro ao enviar a cotação:", error);
    }
  };

  return (
    <Container>
      <h1>Solicite uma Cotação</h1>

      <form className="formulario" onSubmit={enviarCotacao}>
        <h2>Todos os campos são obrigatórios</h2>

        <h3>Dados do solicitante</h3>
        <input type="text" className="input" name="nome" placeholder="Seu Nome" onChange={valorInput} required />
        <input type="text" className="input" name="numeroConta" placeholder="CNPJ/CPF ou Conta Pagadora" onChange={valorInput} required />
        <input type="tel" className="input" name="telefone" placeholder="Telefone" onChange={valorInput} required />
        <input type="email" className="input" name="email" placeholder="Email" onChange={valorInput} required />

        {/* Restante do formulário... */}

        <br />
        <button type="submit" className="btn"> Enviar </button>
      </form>
    </Container>
  );
}

export default Cotacao;
