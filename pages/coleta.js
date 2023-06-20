import React, { useState } from 'react'
import { Container } from "../styles/pages/coleta";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';



function Coleta() {

  const [formulario, setFormulario] = useState({
    nome: "",
    cnpj:"",
    telefone:"",
    email:"",

    remessa:"",
    peso: "",
    altura:"",
    largura:"",
    profundidade:"",
    notaFiscal:"",
    quantidade: "",
    valor:"",
    conteudo:"",

    endereco:"",
    data: "",
    hora1:"",
    hora2:"",
    destino:"",
    obs:""

   })

   const valorInput = e => setFormulario({ ...formulario, [e.target.name]: e.target.value})

   const enviarColeta = async e => {
     e.preventDefault();
     console.log(formulario.nome, formulario.cnpj, formulario.telefone, formulario.email, 
      formulario.remessa, formulario.peso, formulario.altura, formulario.largura, formulario.profundidade,
      formulario.notaFiscal, formulario.quantidade, formulario.valor, formulario.conteudo,
      formulario.endereco, formulario.data, formulario.hora1, formulario.hora2,
      formulario.destino, formulario.obs)
 
   {
     const response = await fetch("/coletaMessenger/", {
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
         <h1>Solicite uma coleta</h1>

         
            <form className="formulario" onSubmit={enviarColeta}>
            <h2>Todos os campos são obrigatórios</h2>
         
         <h3>Dados do solicitante</h3>
      
        <input type="text" className="input" name="nome" placeholder="Seu Nome" onChange={valorInput} required />
        <input type="text" className="input" id="cnpjpagador" placeholder="CNPJ da conta pagadora" onChange={valorInput} required />
         <input type="email" className="input" name="email" placeholder="Digite Seu Email" onChange={valorInput} required />
        <input type="tel" className="input" name="telefone" placeholder="Telefone para Contato" onChange={valorInput} required />
        <br/>
      
        <h3>Dados da Carga</h3>
        <br/>
        <select className="opcao" name="remessa" onChange={valorInput} required>
                <option value="DEFAULT" hidden >Tipo de Remessa</option>
                <option value="Documento">Documento</option>
                <option value="Mercadoria">Mercadoria</option>
        </select> 

          <div className="dimencao">
         <label>Peso:</label>
         <input type="text" className="input2" name="peso" placeholder="000kg" onChange={valorInput} required  />
         <label className="labelx">Dimensões em cm:</label>
         <input type="text" className="input2" name="altura" placeholder="Altura" onChange={valorInput} required  />
         <label className="labelx">x</label>
         <input type="text" className="input2" name="largura" placeholder="Largura" onChange={valorInput} required  />
         <label className="labelx">x</label>
         <input type="text" className="input2" name="profundidade" placeholder="Profundidade" onChange={valorInput} required  />
         </div>
         <input type="text" className="input3" name="notaFiscal" placeholder="Nota Fiscal" onChange={valorInput} required />
         <input type="text" className="input3" name="quantidade" placeholder="Quantidade de Volumes" onChange={valorInput} required  />
         <input type="text" className="input3" name="valor" placeholder="Valor da Mercadoria" onChange={valorInput} required />
         <input type="text" className="input4" name="conteudo" placeholder="Descrição do Conteúdo" onChange={valorInput} required  />
        <br/>
        <h3>Dados do Transporte</h3>
        <input type="text" className="input4" name="endereco" placeholder="Endereço de Origem" onChange={valorInput} required />
        <input type="text" className="input3" name="data" placeholder="Data da Coleta 'DD/MM/YYYY'" onChange={valorInput} required />
        <h4>Horário da coleta</h4>
        <span className="txt">de</span> 
        <input type="text" className="inputh" name="hora1" placeholder="00:00" onChange={valorInput} required />
        <span className="txt">até</span>
         <input type="text" className="inputh" name="hora2" placeholder="00:00" onChange={valorInput} required /> 
        <br/>
        <input type="text" className="input4" name="destino" placeholder="Endereço de Destino" onChange={valorInput} required />
        <input type="text" className="input4" name="obs" placeholder="Observações sobre a carga/manuseio/transporte" onChange={valorInput} required />
        <br/>
       
        <button  type="submit" className="btn"> Enviar </button>     
        </form>
    </Container>
   

  )
}

export default Coleta