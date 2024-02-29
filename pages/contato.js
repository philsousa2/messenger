import React, { useState } from 'react';
import { Container } from '../styles/pages/contato';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

function Contato() {
  const [formulario, setFormulario] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const valorInput = (e) =>
    setFormulario({ ...formulario, [e.target.name]: e.target.value });

  const enviarContato = async (e) => {
    e.preventDefault();
   
    try {
      const response = await fetch('/contatoMessenger/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formulario })
      });

      if (response.ok) {
        alert('Contato enviado com sucesso!');
        window.location.reload()
      } else {
        throw new Error('Ocorreu um erro ao enviar o contato.');
      }
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao enviar o contato. Por favor, tente novamente.');
    }
  };

  return (
    <Container>
      <h1>Envie-nos um e-mail</h1>
      <div className="containerinfo">
        <form onSubmit={enviarContato}>
          <div className="formulario">
            <input
              type="text"
              className="input"
              name="nome"
              placeholder="Nome"
              value={formulario.nome}
              onChange={valorInput}
              required
            />

            <input
              type="tel"
              className="input"
              name="telefone"
              placeholder="Telefone"
              value={formulario.telefone}
              onChange={valorInput}
              required
            />

            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              value={formulario.email}
              onChange={valorInput}
              required
            />

            <select
              className="assunto"
              name="assunto"
              value={formulario.assunto}
              onChange={valorInput}
              required
            >
              <option value="DEFAULT" hidden>
                Assunto
              </option>
              <option value="Trabalhe Conosco">Trabalhe Conosco</option>
              <option value="Rastreamento">Rastreamento</option>
              <option value="Serviço Doméstico">Serviço Doméstico</option>
              <option value="Serviço Internacionais">Serviço Internacionais</option>
              <option value="Dúvidas">Dúvidas</option>
              <option value="Críticas e elogios">Críticas e elogios</option>
            </select>

            <textarea
              className="txtarea"
              name="mensagem"
              placeholder="Mensagem"
              value={formulario.mensagem}
              onChange={valorInput}
              cols="30" rows="10"
              required
            ></textarea>

            <button type="submit" className="btn">
              Enviar
            </button>
          </div>
        </form>

        <div>
          <div className="endereco">
            <h2>Messenger Rio</h2>
            <p>
              <FiPhone /> <span>Telefone:</span> +55 (21) 2142-8000
            </p>
            <p>
              <FiMail /> <span>Email:</span>
              <a href="mailto:cs.rio@messenger.com.br">cs.rio@messenger.com.br</a>
            </p>
          </div>
          <div className="endereco">
            <h2>Messenger São Paulo</h2>
            <p>
              <FiPhone /> <span>Telefone:</span> +55 (11) 3199-0909
            </p>
            <p>
              <FiMail /> <span>Email:</span>
              <a href="mailto:cs.sao@messenger.com.br">cs.sao@messenger.com.br</a>
            </p>
          </div>
          <div className="endereco">
            <h2>Messenger Macaé</h2>
            <p>
              <FiPhone /> <span>Telefone:</span> +55 (22) 3199-0909
            </p>
            <p>
              <FiMail /> <span>Email:</span>
              <a href="mailto:cs.mea@messenger.com.br">cs.mea@messenger.com.br</a>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Contato;