import React, { useState } from 'react'
import { Container } from "../styles/pages/contato";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
const currencies = [
    {
      value: 'Trabalhe Conosco',
      label: 'Trabalhe Conosco',
    },
    {
      value: 'Rastreamento',
      label: 'Rastreamento',
    },
    {
      value: 'Serviço Doméstico',
      label: 'Serviço Doméstico',
    },
    {
      value: 'Serviço Internacionais',
      label: 'Serviço Internacionais',
    },
    {
        value: 'Dúvidas',
        label: 'Dúvidas',
      },
      {
        value: 'Críticas e elogios',
        label: 'Críticas e elogios',
      },
  ];

function Contato() {
    const [currency, setCurrency] = useState('');
    const handleChange = (event) => {
        setCurrency(event.target.value);
      };
  return (
   <Container>
    <div className="formulario">
        <TextField className="input" id="nome" label="Nome" required />
        <TextField className="input" id="telefone"  label="Telefone" type="tel" required/>
        <TextField className="input" id="email"  label="E-mail" type="email" required/>
        
        <TextField
            id="outlined-select-currency"
            select
            className="input"
            required
            label="Assunto"
            value={currency}
            onChange={handleChange}
            helperText="Please select your currency"
            >
            {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>

            <TextField className="input" id="text"   multiline  rows={5} label="Mensagem" type="text" required/>
      
       
       
       </div>
       <div className="mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0335635784513!2d-43.222347884992466!3d-22.912132843822143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e564a76bdc7%3A0x17b8caea2b1cfbf5!2sMessenger%20Express!5e0!3m2!1spt-BR!2sbr!4v1662075986960!5m2!1spt-BR!2sbr" width="600" height="250"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
   
   </Container>
  )
}

export default Contato