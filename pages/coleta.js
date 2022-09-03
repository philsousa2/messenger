import React from 'react'
import { Container } from "../styles/pages/coleta";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function coleta() {
  return (
    <Container>
         <h1>Solicite uma coleta</h1>
        
            <div className="formulario">
            <h2>Todos os campos são obrigatórios</h2>
         
         <h3>Dados do solicitante</h3>
      
        <TextField type="text" className="input2" id="nome" label="Seu Nome" required />
        <TextField type="text" className="input2" id="numeroConta" label="Número da Conta" required />
        <TextField type="tel"  className="input2" id="telefone" label="telefone" required />
        <TextField type="email" className="input2" id="email" label="Seu Email" required />
        <br/>
      
        <h3>Dados da Carga</h3>
        <br/>
        <TextField type="text" className="input2" id="peso" label="Peso '0,00kg'" required />
        <TextField type="text" className="input2" id="dimensao" label="Dimensões '000 x 000 x 000'" required />
        <TextField type="text" className="input2" id="conteudo" label="Descrição do Conteúdo" required />
        <TextField type="text" className="input2" id="quantidade" label="Quantidade de Volumes" required />
        <TextField type="text" className="input2" id="valor" label="Valor da Mercadoria" required />
        <TextField type="text" className="input2" id="notaFiscal" label="Nota Fiscal" required />
        <br/>
        <h3>Dados do Transporte</h3>
        <TextField type="text" className="input" id="endereco" label="Endereço de Origem" required />
        <br/>
        <h4>Horário da coleta</h4>
        <div className="txt">de</div> <TextField type="text" className="inpu3" id="hora 1" label="00:00" required /> <div className="txt">até</div>
         <TextField type="text" className="inpu3" id="hora 2" label="00:00" required /> 
        <br/>
        <TextField type="text" className="input" id="destino" label="Endereço de Destino" required />
        <TextField type="text" className="input" id="obs" label="Observações sobre a carga/manuseio/transporte" required />
        <br/>
       
        <Button  className="btn" variant="contained" disableElevation>
                 Enviar
            </Button>
        </div>
    </Container>
   

  )
}

export default coleta