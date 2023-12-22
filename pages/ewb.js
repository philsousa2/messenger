import React, { useState } from 'react'
import { Container } from "../styles/pages/ewb";

function Ewb() {

  const [formulario, setFormulario] = useState({
    nome: "",
    cnpjpagador: "",
    razaoSocial: "",
    cnpj: "",
    email: "",
    telefone: "",
    endereco: "",
    cep: "",
    cidade: "",
    estado: "",
    pais: "",

    remessa: "",
    peso: "",
    altura: "",
    largura: "",
    profundidade: "",
    notaFiscal: "",
    quantidade: "",
    valor: "",
    conteudo: "",
    observacao: "",

    servico: "",
    retornoDeProtocolo: "",
    nextFlyOut: "",
    deliveryDutyPaid: "",
    coletaSim: "",
    coletaNao: ""

  })

  const valorInput = e => setFormulario({ ...formulario, [e.target.name]: e.target.value })

  const enviarEwb = async e => {
    e.preventDefault();
    console.log(formulario.nome, formulario.cnpjpagador, formulario.razaoSocial, formulario.cnpj,
      formulario.email, formulario.telefone, formulario.endereco, formulario.cep, formulario.cidade, formulario.estado, formulario.pais,
      formulario.remessa, formulario.peso, formulario.altura, formulario.largura, formulario.profundidade, formulario.notaFiscal, formulario.quantidade,
      formulario.valor, formulario.conteudo, formulario.observacao, formulario.servico, formulario.retornoDeProtocolo, formulario.nextFlyOut,
      formulario.deliveryDutyPaid, formulario.coletaSim, formulario.coletaNao)

    {
      const response = await fetch("/ewbMessenger/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formulario })
      })
      const result = await response.json();
      console.log(result);
    }

  }

  return (
    <Container>
      <h1>Emissão de e-WB</h1>
      <p>O remetente declara ter conhecimento dos <span><a href="/Termos_e_condicoes_de_transporte.pdf" download>Termos e condições de transporte </a> </span> que regulamentam os serviços Messenger, com os quais concorda no ato da emissão desta guia de embarque.</p>

      <form className="formulario" onSubmit={enviarEwb}>
        <h3>Dados do Remetente</h3>
        <input type="text" className="input" name="nomeremetente" placeholder="Nome" onChange={valorInput} required />
        <input type="text" className="input" id="cnpjpagador" placeholder="CNPJ da conta pagadora" onChange={valorInput} required />
        <input type="text" className="input" id="razaoSocialremetente" placeholder="Razão Social" onChange={valorInput} required />
        <input type="text" className="input" id="cnpjremetente" placeholder="CNPJ ou CPF do Remetente" onChange={valorInput} required />
        <br />
        <input type="email" className="input" name="emailremetente" placeholder="Email do Responsável" onChange={valorInput} required />
        <input type="tel" className="input" name="telefoneremetente" placeholder="Telefone para Contato" onChange={valorInput} required />
        <br />
        <input type="text" className="input4" name="enderecoremetente" placeholder="Endereço de Origem" onChange={valorInput} required />
        <br />
        <input type="text" className="input3" name="cepremetente" placeholder="CEP" onChange={valorInput} required />
        <input type="text" className="input3" name="cidaderemetente" placeholder="Cidade" onChange={valorInput} required />
        <input type="text" className="input3" name="estadoremetente" placeholder="Estado" onChange={valorInput} required />
        <input type="text" className="input3" name="paisremetente" placeholder="País" onChange={valorInput} required />

        <h3>Dados do Destinatário</h3>

        <input type="text" className="input" name="nomedestinatario" placeholder="Nome" onChange={valorInput} required />
        <input type="text" className="input" id="razaoSocialdestinatario" placeholder="Razão Social" onChange={valorInput} required />
        <input type="text" className="input" id="cnpjdestinatario" placeholder="CNPJ ou CPF" onChange={valorInput} required />
        <br />
        <input type="email" className="input" name="emaildestinatario" placeholder="Email" onChange={valorInput} required />
        <input type="tel" className="input" name="telefonedestinatario" placeholder="Telefone" onChange={valorInput} required />
        <br />
        <input type="text" className="input4" name="enderecodestinatario" placeholder="Endereço" onChange={valorInput} required />
        <br />
        <input type="text" className="input3" name="cepdestinatario" placeholder="CEP" onChange={valorInput} required />
        <input type="text" className="input3" name="cidadedestinatario" placeholder="Cidade" onChange={valorInput} required />
        <input type="text" className="input3" name="estadodestinatario" placeholder="Estado" onChange={valorInput} required />
        <input type="text" className="input3" name="paisdestinatario" placeholder="País" onChange={valorInput} required />


        <h3>Tipo de Remessa</h3>

        <select className="opcao" name="remessa" onChange={valorInput} required>
          <option value="DEFAULT" hidden >Tipo de Remessa</option>
          <option value="Documento">Documento</option>
          <option value="Mercadoria">Mercadoria</option>
        </select>


        <br />
        <div className="dimencao">
          <label>Peso:</label>
          <input type="text" className="input2" name="peso" placeholder="000kg" onChange={valorInput} required />
          <label htmlFor="">Dimensões em cm:</label>
          <input type="text" className="input2" name="altura" placeholder="Altura" onChange={valorInput} required />
          <label>x</label>
          <input type="text" className="input2" name="largura" placeholder="Largura" onChange={valorInput} required />
          <label>x</label>
          <input type="text" className="input2" name="profundidade" placeholder="Profundidade" onChange={valorInput} required />
        </div>


        <input type="text" className="input3" name="notaFiscal" placeholder="Nota Fiscal" onChange={valorInput} required />
        <input type="text" className="input3" name="quantidade" placeholder="Quantidade de Volumes" onChange={valorInput} required />
        <input type="text" className="input3" name="valor" placeholder="Valor da Mercadoria" onChange={valorInput} required />
        <input type="text" className="input" name="conteudo" placeholder="Descrição do Conteúdo" onChange={valorInput} required />
        <input type="text" className="input" name="observacao" placeholder="Observações sobre a carga/manuseio/transporte" onChange={valorInput} required />



        <h3>Opções de Serviço:</h3>

        <select className="opcao" name="servico" onChange={valorInput} required>
          <option value="DEFAULT" hidden>Opções de Serviço:</option>
          <option value="Standard ">Standard </option>
          <option value="Urgente">Urgente</option>
        </select>


        <br />
        <div className="chek">
          <label>Opções Adicionais:</label>
          <input className="radio" type="checkbox" id="RetornoDeProtocolo" name="RetornoDeProtocolo" value="Retorno de Protocolo" onChange={valorInput} />
          <label htmlFor="RetornoDeProtocolo">Retorno de Protocolo</label>

          <input className="radio" type="checkbox" id="NextFlightOut" name="NextFlightOut" value="Next Flight Out" onChange={valorInput} />
          <label htmlFor="NextFlyOut">Next Flight Out</label>

          <input className="radio" type="checkbox" id="DeliveredDutyPaid" name="DeliveredDutyPaid" value="Delivered Duty Paid" onChange={valorInput} />
          <label htmlFor="DeliveryDutyPaid">Delivered Duty Paid</label>
        </div>

        <div>
          <h3>Deseja solicitar coleta desta e-WB?</h3>

          <input className="radio" type="radio" id="sim" name="coleta" value="SIM" onChange={valorInput} />
          <label htmlFor="sim">SIM</label>

          <input className="radio" type="radio" id="nao" name="coleta" value="NAO" onChange={valorInput} />
          <label htmlFor="nao">NÃO</label>
        </div>
        <button type="submit" className="btn">ENVIAR</button>
      </form>


    </Container>
  )
}

export default Ewb