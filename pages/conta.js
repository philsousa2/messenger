import AddressForm from '../components/AddressForm';
import { Container } from "../styles/pages/conta";
import { useState } from 'react';
import axios from 'axios';
import qs from 'qs';

const SuaComponente = () => {
  const [formValues, setFormValues] = useState({
    cnpj: '',
    razaoSocial: '',
    inscricaoEstadual: '',
    cnae: '',
    nome: '',
    email: '',
    telefone: '',
    emailFinanceiro: '',
    nomeFinanceiro: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    municipio: '',
    uf: '',
    pais: '',
    documento: null
  });

  const valorInput = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const consultarCEP = async (cep) => {
    try {
      //const qs = require('qs');
      //const response = await axios.get('https://viacep.com.br/ws/${cep}/json/', qs.stringify({ 'cep': ${cep} }));
      const response = await axios.get("https://viacep.com.br/ws/${cep}/json/");
      const data = response.data;
      setFormValues({
        ...formValues,
        logradouro: data.logradouro,
        bairro: data.bairro,
        municipio: data.localidade,
        uf: data.uf
      });
    } catch (error) {
      console.error('Erro ao consultar CEP:', error);
    }
  };

  const enviarConta = async (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados do formulário para o backend

    try {
      const response = await fetch("/contaMessenger/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formulario })
      })
      if (response.ok) {
        
        alert('A solicitação de cadastro foi feita com sucesso! Nossa Central de Serviços retornará o contato o mais breve possivel, em horário útil.');
        window.location.reload()
      } else {
        throw new Error('Ocorreu um erro ao solicitar o Cadastro');
      }
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro na abertura de conta. Por favor, tente novamente.');
    }
    
    console.log('Dados do formulário:', formValues);

  };

  return (
    <Container>
      <h1>ABRA SUA CONTA</h1>
      <p>A conta Messenger permite a utilização dos serviços com pagamento faturado. Preencha aqui as informações cadastrais da sua empresa, para aprovação do crédito. Anexar contrato social, Inscrição Estadual ou Municipal conforme o caso. Nossa Central de Serviços retornará o contato o mais breve possivel, em horário útil.<br />
        <span> A Messenger não fatura despesas referentes às taxas e tributos gerados na importação ou exportação de remessa expressa.</span></p>
      <h2>Todos os campos são obrigatórios.</h2>
      <form onSubmit={enviarConta} className="formulario">
        {/* Seus campos de input JSX */}
        <input type="text" className="input2" name="cnpj" placeholder="CNPJ" onChange={valorInput} required />
        <input type="text" className="input2" name="razaoSocial" placeholder="Razão Social" onChange={valorInput} required />
        <input type="text" className="input2" name="inscricaoEstadual" placeholder="Inscrição Estadual" onChange={valorInput} required />
        <input type="text" className="input2" name="cnae" placeholder="CNAE" onChange={valorInput} required />
        <br />
        <input type="text" className="input" name="nome" placeholder="Nome do Responsável" onChange={valorInput} required />
        <br />
        <input type="email" className="input2" name="email" placeholder="Email do Responsável" onChange={valorInput} required />
        <input type="tel" className="input2" name="telefone" placeholder="Telefone para Contato" onChange={valorInput} required />
        <br />
        <input type="email" className="input2" name="emailFinanceiro" placeholder="Email do Responsável Financeiro" onChange={valorInput} required />
        <input type="text" className="input2" name="nomeFinanceiro" placeholder="Contato no Depto Financeiro" onChange={valorInput} required />
        <br />
        <input type="text" className="input3" name="cep" placeholder="CEP" onBlur={(event) => consultarCEP(event.target.value)} onChange={valorInput} required />
        <input type="text" className="input2" name="logradouro" placeholder="Logradouro" onChange={valorInput} required />
        <input type="text" className="input3" name="numero" placeholder="Número" onChange={valorInput} required />
        <br />
        <input type="text" className="input2" name="complemento" placeholder="Complemento" onChange={valorInput} required />
        <input type="text" className="input3" name="bairro" placeholder="Bairro" onChange={valorInput} required />
        <input type="text" className="input3" name="municipio" placeholder="Município" onChange={valorInput} required />
        <br />
        <input type="text" className="input3" name="uf" placeholder="UF" onChange={valorInput} required />
        <input type="text" className="input3" name="pais" placeholder="País" onChange={valorInput} required />
        <button type="submit" className="btn"> Enviar </button>
      </form>
    </Container>
  );
};

export default SuaComponente;