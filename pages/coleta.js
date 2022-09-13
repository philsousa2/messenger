import React from 'react'
import { Container } from "../styles/pages/coleta";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';



function Coleta() {

  return (
    <Container>
         <h1>Solicite uma coleta</h1>
        
            <form className="formulario">
            <h2>Todos os campos são obrigatórios</h2>
         
         <h3>Dados do solicitante</h3>
      
        <input type="text" className="input" name="nome" placeholder="Seu Nome" required />
        <input type="text" className="input" id="cnpjpagador" placeholder="CNPJ da conta pagadora" required />
         <input type="email" className="input" name="email" placeholder="Digite Seu Email" required />
        <input type="tel" className="input" name="telefone" placeholder="Telefone para Contato" required />
        <br/>
      
        <h3>Dados da Carga</h3>
        <br/>
        <select className="opcao" name="remessa"  required>
                <option value="DEFAULT" hidden >Tipo de Remessa</option>
                <option value="Documento">Documento</option>
                <option value="Mercadoria">Mercadoria</option>
        </select> 

          <div className="dimencao">
         <label>Peso:</label>
         <input type="text" className="input2" name="peso" placeholder="000kg"  required  />
         <label className="labelx">Dimensões em cm:</label>
         <input type="text" className="input2" name="altura" placeholder="Altura"  required  />
         <label className="labelx">x</label>
         <input type="text" className="input2" name="largura" placeholder="Largura" required  />
         <label className="labelx">x</label>
         <input type="text" className="input2" name="profundidade" placeholder="Profundidade"  required  />
         </div>
         <input type="text" className="input3" name="notaFiscal" placeholder="Nota Fiscal" required />
         <input type="text" className="input3" name="quantidade" placeholder="Quantidade de Volumes" required  />
         <input type="text" className="input3" name="valor" placeholder="Valor da Mercadoria" required />
         <input type="text" className="input4" name="conteudo" placeholder="Descrição do Conteúdo" required  />
        <br/>
        <h3>Dados do Transporte</h3>
        <input type="text" className="input4" name="endereco" placeholder="Endereço de Origem" required />
        <input type="text" className="input3" name="data" placeholder="Data da Coleta 'DD/MM/YYYY'" required />
        <h4>Horário da coleta</h4>
        <span className="txt">de</span> 
        <input type="text" className="inputh" name="hora1" placeholder="00:00" required />
        <span className="txt">até</span>
         <input type="text" className="inputh" name="hora2" placeholder="00:00" required /> 
        <br/>
        <input type="text" className="input4" name="destino" placeholder="Endereço de Destino" required />
        <input type="text" className="input4" name="obs" placeholder="Observações sobre a carga/manuseio/transporte" required />
        <br/>
       
        <button  type="submit" className="btn"> Enviar </button>     
        </form>
    </Container>
   

  )
}

export default Coleta