import React, { useState } from 'react'
import { Container } from "../styles/pages/conta";

function Conta() {

  const [formulario, setFormulario] = useState({
    cnpj: "",
    razaoSocial:"",
    email:"",
    inscricaoEstadual:"",
    cnae:""
   })

   const valorInput = e => setFormulario({ ...formulario, [e.target.name]: e.target.value})

   const enviarConta = async e => {
     e.preventDefault();
     console.log(formulario.cnpj, formulario.razaoSocial, formulario.email, formulario.inscricaoEstadual, formulario.cnae)
 
   {
     const response = await fetch("/contaMessenger/", {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({formulario})
     })
     const result = await response.json();
     console.log(result);
   }
 
   }
  return (
    <Container>
         <h1>Abra sua conta</h1>
        <p>A conta Messenger permite a utilização dos serviços com pagamento faturado. Preencha aqui as
        informações cadastrais da sua empresa, para aprovação do crédito. Anexar contrato social, Inscrição
        Estadual ou Municipal conforme o caso. Nossa Central de Serviços retornará o contato o mais breve
        possivel, em horário útil. <br/><span> A Messenger não fatura despesas referentes às taxas e tributos gerados na
        importação ou exportação de remessa expressa.</span></p>
            <h2>Todos os campos são obrigatórios</h2>
            <form onSubmit={enviarConta}></form>
            <form className="formulario">

        <input type="text" className="input2" id="cnpj" placeholder="CNPJ" required />
        <input type="text" className="input2" id="razaoSocial" placeholder="Razão Social" required />
        <input type="text" className="input2" name="inscricaoEstadual" placeholder="Inscrição Estadual" required />
        <input type="text" className="input2" name="cnae" placeholder="CNAE" required />
        <br/>
        <input type="text" className="input" name="nome" placeholder="Nome do Responsável" required />
        <br/>
        <input type="email" className="input2" name="email" placeholder="Email do Responsável" required />
        <input type="tel" className="input2" name="telefone" placeholder="Telefone para Contato" required />
        <br/>
        <input type="email" className="input2" name="emailFinanceiro" placeholder="Email do Responsável Financeiro" required />
        <input type="text" className="input2" name="nomeFinanceiro" placeholder="Contato no Depto Financeiro" required />
        <br/>
        <input type="text" className="input3" name="cep" placeholder="CEP" required />
        <input type="text"className="input2" name="logradouro" placeholder="Logradouro" required />
        <input type="text"className="input3" name="numero" placeholder="Número" required />
        <br/>
        <input type="text" className="input2" name="complemento" placeholder="Complemento" required />
        <input type="text" className="input3" name="bairro" placeholder="Bairro" required />
        <input type="text" className="input3" name="municipio" placeholder="Município" required />
        <br/>
        <input type="text" className="input3" name="uf" placeholder="UF" required />
        <input type="text" className="input3" name="pais" placeholder="País" required />
        <input type="file" name="documento" />
        <button  type="submit" className="btn"> Enviar </button>     
        </form>
    </Container>
   

  )
}

export default conta