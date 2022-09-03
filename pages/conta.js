import React from 'react'
import { Container } from "../styles/pages/conta";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function conta() {
  return (
    <Container>
         <h1>Abra sua conta</h1>
        <p>A conta Messenger permite a utilização dos serviços com pagamento faturado. 
            A Messenger não fatura despesas referentes às taxas e tributos gerados na importação 
            de remessa expressa. Preencha aqui as informações cadastrais da sua empresa, para aprovação 
            do crédito. Nossa Central de Serviços retornará o contato em até dois dias.</p>
            <div className="formulario">
              <h2>Todos os campos são obrigatórios</h2>
        <TextField className="input2" id="cnpj" label="CNPJ" required />
        <TextField className="input2" id="razaoSocial" label="Razão Socia" required />
        <br/>
        <TextField className="input2" id="inscricaoEstadual" label="Inscrição Estadual" required />
        <TextField className="input2" id="cnae" label="CNAE" required />
        <br/>
        <TextField className="input" id="nome" label="Nome do Responsável" required />
        <br/>
        <TextField className="input2" id="email" label="Email do Responsável" required />
        <TextField className="input2" id="telefone" label="Telefone para Contato" required />
        <br/>
        <TextField className="input2" id="emailFinanceiro" label="Email do Responsável Financeiro" required />
        <TextField className="input2" id="nomeFinanceiro" label="Contato no Depto Financeiro" required />
        <br/>
        <TextField className="input3" id="cep" label="CEP" required />
        <TextField className="input2" id="logradouro" label="Logradouro" required />
        <TextField className="input3" id="numero" label="Número" required />
        <br/>
        <TextField className="input2" id="complemento" label="Complemento" required />
        <TextField className="input3" id="bairro" label="Bairro" required />
        <TextField className="input3" id="municipio" label="Município" required />
        <br/>
        <TextField className="input4" id="uf" label="UF" required />
        <TextField className="input3" id="pais" label="País" required />
        <Button  className="btn" variant="contained" disableElevation>
                 Enviar
            </Button>
        </div>
    </Container>
   

  )
}

export default conta