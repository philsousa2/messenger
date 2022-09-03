import React from 'react'
import { Container } from "../styles/pages/conta";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function conta() {
  return (
    <Container>
         <h1>Abra sua conta</h1>
        <p>A conta Messenger permite a utilização dos serviços com pagamento faturado. 
            A Messenger não fatura despesas referentes às taxas e tributos gerados na importação 
            de remessa expressa. Preencha aqui as informações cadastrais da sua empresa, para aprovação 
            do crédito. Nossa Central de Serviços retornará o contato em até dois dias.</p>
    </Container>
   

  )
}

export default conta