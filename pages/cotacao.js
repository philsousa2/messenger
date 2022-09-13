import React, { useState } from 'react'
import { Container } from "../styles/pages/cotacao";
import TextField from '@mui/material/TextField';

function Cotacao() {
  
  const [formulario, setFormulario] = useState({
    nome: "",
    telefone:"",
    email:"",
    assunto:"",
    mensagem:""
   })

 

  const valorInput = e => setFormulario({ ...formulario, [e.target.name]: e.target.value})

  const enviarContacao = async e => {
    e.preventDefault();
    console.log(formulario.nome, formulario.telefone, formulario.email, formulario.assunto, formulario.mensagem)

  {/**
    await fetch(" URL DA API  ", {
      method: 'POST',
      headers: {
        'Content-Typ'e: 'application/json'
      },
      body: JSON.stringify({formulario})
    })
**/}

  }
  
  return (
    <Container>
         <h1>Solicite uma Cotação</h1>
        
            <form className="formulario" onSubmit={enviarContacao}>
            <h2>Todos os campos são obrigatórios</h2>
         
         <h3>Dados do solicitante</h3>
         <input type="text" className="input" name="nome" placeholder="Seu Nome" onChange={valorInput} required  />
         <input type="text" className="input" name="numeroConta" placeholder="CNPJ/CPF Conta Pagadora" onChange={valorInput} required  />
         <input type="tel" className="input" name="telefone" placeholder="Telefone" onChange={valorInput} required  />
         <input type="email" className="input" name="email" placeholder="Email" onChange={valorInput} required  />

        <br/>
      
        <h3>Dados da Carga</h3>
        <br/>
        <select className="embalagem" name="embalagem" onChange={valorInput} required>
              <option value="selected" hidden>Tipo de Embalagem</option>
                <option value="CAIXA">CAIXA</option>
                <option value="PAC">PAC</option>  
        </select>  
         <div className="dimencao">
         <label>Peso:</label>
         <input type="text" className="input2" name="peso" placeholder="000kg" onChange={valorInput} required  />
         <label htmlFor="">Dimensões em cm:</label>
         <input type="text" className="input2" name="altura" placeholder="Altura" onChange={valorInput} required  />
         <label>x</label>
         <input type="text" className="input2" name="largura" placeholder="Largura" onChange={valorInput} required  />
         <label>x</label>
         <input type="text" className="input2" name="profundidade" placeholder="Profundidade" onChange={valorInput} required  />
         </div>
      
        
         <input type="text" className="input3" name="notaFiscal" placeholder="Nota Fiscal" required />
         <input type="text" className="input3" name="quantidade" placeholder="Quantidade de Volumes" onChange={valorInput} required  />
         <input type="text" className="input3" name="valor" placeholder="Valor da Mercadoria" required />
         <input type="text" className="input" name="conteudo" placeholder="Descrição do Conteúdo" onChange={valorInput} required  />
 
        <br/>
        <h3>Dados do Transporte</h3>
        <h4>ORIGEM:</h4>
        <input type="text" className="input3" name="cepRemetente" placeholder="CEP" required />
        <input type="text" className="input" name="endereco" placeholder="Endereço de Origem" required />
        <input type="text" className="input3" name="complemento" placeholder="Complemento" required />
        <input type="text" className="input3" name="cidade" placeholder="Cidade" required />
        <input type="text" className="input3" name="estado" placeholder="Estado" required />
        <input type="text" className="input3" name="pais" placeholder="País" required />
        <input type="text" className="input" name="remetente" placeholder="CPF/CNPJ REMETENTE" required />

        <h4>DESTINO:</h4>
        <input type="text" className="input3" name="ceDestinatario" placeholder="CEP" required />
        <input type="text" className="input" name="enderecoDestinatario" placeholder="Endereço de Destino" required />
        <input type="text" className="input3" name="complementoDestinatario" placeholder="Complemento" required />
        <input type="text" className="input3" name="cidadeDestinatario" placeholder="Cidade" required />
        <input type="text" className="input3" name="estadoDestinatario" placeholder="Estado" required />
        <input type="text" className="input3" name="paisDestinatario" placeholder="País" required />
        <input type="text" className="input" name="destinatario" placeholder="CPF/CNPJ DESTINATÁRIO" required />

        <h4>Horário da coleta</h4>
        <span className="txt">de</span> 
        <input type="text" className="inputh" name="hora1" placeholder="00:00" required />
        <span className="txt">até</span>
         <input type="text" className="inputh" name="hora2" placeholder="00:00" required /> 
        <br/>
      
        <h4>ENTREGA:</h4>
        <input type="text" className="input3" name="dataEntrega" placeholder="Data da Entrega 'DD/MM/YYYY'" required />
        <span className="txt">de</span> 
        <input type="text" className="inputh" name="horaEntrega1" placeholder="00:00" required />
        <span className="txt">até</span>
        <input type="text" className="inputh" name="horaEntrega2" placeholder="00:00" required /> 

        <input type="text" className="input" name="obs" placeholder="Observações sobre a carga/manuseio/transporte" required />
        <br/>
       
        <button  type="submit" className="btn"> Enviar </button>     
        </form>
    </Container>
   

  )
}

export default Cotacao