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
              <FiMapPin /> <span>Endereço:</span> R. Pedro Guedes, 55 - Maracanã, Rio de Janeiro - RJ 20271-040,
              Brazil
            </p>
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
              <FiMapPin /> <span>Endereço:</span> R. Nelson de Moraes Lopes, 35 – Vila Guilherme, São Paulo - SP
              02052-045, Brazil
            </p>
            <p>
              <FiPhone /> <span>Telefone:</span> +55 (11) 2203-9531
            </p>
            <p>
              <FiMail /> <span>Email:</span>
              <a href="mailto:cs.sao@messenger.com.br">cs.sao@messenger.com.br</a>
            </p>
          </div>
          <div className="endereco">
            <h2>Messenger Macaé</h2>
            <p>
              <FiMapPin /> <span>Endereço:</span> R. IB Francisco Lima de Moura, 10 – Prédio 2 Novo Cavaleiros,
              Macaé - RJ 27933-370, Brazil
            </p>
            <p>
              <FiPhone /> <span>Telefone:</span> +55 (22) 2773-3250
            </p>
            <p>
              <FiMail /> <span>Email:</span>
              <a href="mailto:cs.mea@messenger.com.br">cs.mea@messenger.com.br</a>
            </p>
          </div>
        </div>
      </div>
      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0335635784513!2d-43.222347884992466!3d-22.912132843822143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e564a76bdc7%3A0x17b8caea2b1cfbf5!2sMessenger%20Express!5e0!3m2!1spt-BR!2sbr!4v1662075986960!5m2!1spt-BR!2sbr"
          width="720"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="maparesponsivo">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0335635784513!2d-43.222347884992466!3d-22.912132843822143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e564a76bdc7%3A0x17b8caea2b1cfbf5!2sMessenger%20Express!5e0!3m2!1spt-BR!2sbr!4v1662075986960!5m2!1spt-BR!2sbr"
          width="350"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
}

export default Contato;
