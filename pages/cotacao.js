import React, { useState } from 'react'
import { Container } from "../styles/pages/cotacao";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'CAIXA',
    label: 'CAIXA',
  },
  {
    value: 'PAC',
    label: 'PAC',
  },
];

function Coleta() {
  const [currency, setCurrency] = useState('');
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  
  return (
    <Container>
         <h1>Solicite uma Cotação</h1>
        
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
        <TextField
            id="outlined-select-currency"
            select
            className="input"
            required
            label="Tipo de Embalagem"
            value={currency}
            onChange={handleChange}
            >
            {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
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
        <TextField type="text" className="input2" id="cidade" label="Cidade" required />
        <TextField type="text" className="input2" id="pais" label="País" required />
        <h4>Horário da coleta</h4>
        <span className="txt">de</span> 
        <TextField type="text" className="inputh" id="hora 1" label="00:00" required />
        <span className="txt">até</span>
         <TextField type="text" className="inputh" id="hora 2" label="00:00" required /> 
        <br/>
        <TextField type="text" className="input" id="destino" label="Endereço de Destino" required />
        <br/>
        <TextField type="text" className="input2" id="cidadeDestino" label="Cidade de Destino" required />
        <TextField type="text" className="input2" id="paisDestino" label="País de Destino" required />
        <br/>
        <TextField type="text" className="input2" id="dataEntrega" label="Data da Entrega 'DD/MM/YYYY'" required />
        <TextField type="text" className="input2" id="hodaEntrega" label="Hora da Entrega '00:00'" required />

        <TextField type="text" className="input" id="obs" label="Observações sobre a carga/manuseio/transporte" required />
        <br/>
       
        <Button  className="btn" variant="contained" disableElevation>
                 Enviar
            </Button>
        </div>
    </Container>
   

  )
}

export default Coleta