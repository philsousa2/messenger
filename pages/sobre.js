import React from 'react'
import { Container } from "../styles/pages/sobre";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { GoPrimitiveDot, GoChevronDown } from "react-icons/go";

function sobre() {
  return (
   <Container>
        <div className="sobre">
            <h1>Sobre a MESSENGER</h1>
            <br/> <br/>
            <p>
            A Messenger Express é uma organização logística do segmento de transportes, 
            dedicada à prestação de serviços de entrega expressa. Devido ás suas características 
            estruturais, a Messenger opera nas extremidades das cadeias de suprimentos, com transporte 
            de documentos, encomendas e cargas leves de alto valor agregado, sobretudo no modal aéreo.
            </p>
            <br/>
            <p>
            Atualmente, a Messenger é responsável pelas operações brasileiras de provedores internacionais
            de serviços courier, linehaul e carga expressa, como IBC Inc., Linex, OCS, além de integrar a Global Distribution Alliance - GDA.
            </p>
            <br/>
            <p>
            A Messenger também oferece aos clientes locais os serviços de entregas porta a porta nacionais e internacionais de documentos, 
            amostras e mercadorias, integrando uma rede presente em mais de duas mil localidades no Brasil e 220 países.
            </p>
            <br/> <br/>
            <h1>História</h1>
            <br/> <br/>
            <p>
            No Brasil, a Messenger estabeleceu-se nos anos 1990 para o atendimento ás operações de liberação alfandegária e distribuição de 
            remessas expressas provenientes de operadores internacionais, como IBC Inc., Airborne Express, Emery Worldwide e Aramex
            </p>
            <br/>
            <p>
            São mais de 20 anos dedicados ao atendimento às necessidades de logistica expressa de pequenas e grandes empresas, 
            oferecendo soluções sob medida para o atacado e clientes finais. Uma reputação construida com base na busca constante 
            da excelência e das relações sólidas com clientes, técnicos e autoridades reguladoras.
            </p>
            <br/> <br/>
            <h1>Missão</h1>
            <br/>
            <p>
            Prover serviços de transporte expresso de documentos e cargas, oferecendo soluções orientadas pelas necessidades do
             mercado e atendimento flexível.
            </p>
            <br/> <br/>
            <h1>Valores</h1>
            <br/> 
            <p>
            Qualidade da informação, transparência e ética são valores que norteiam as atividades da Messenger.
            </p>
            <br/> <br/>
           

            <Accordion >
        <AccordionSummary
        className="accordion"
        expandIcon={<GoChevronDown size={40} className="icon" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <h1>Compliance da Messenger Express com os Requisitos da UE</h1>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <br/> <br/>
            <h2>Transparência na forma como os dados são manipulados.</h2>
            <br/>
            <p>
            A Messenger Express, no sentido de estar em acordo com as exigências da União Européia sobre
            como o seu website manipula os dados dos usuários, apresenta nesta página, um relatório com informações 
            sobre os dados e quais ações os usuários podem adotar para lidar com as informações pessoais ou corporativas utilizadas aqui:
            </p>
            <br/>
            <h3><GoPrimitiveDot size={10}/>Sobre meta-dados de navegação</h3>
            <p>
        Nós coletamos dados e armazenamos para melhorar a experiência do usuário ao navegar pelo website. Tanto em cookies, 
        quanto em bancos de dados, essas informações são armazenadas apenas visando a capacidade (atual ou futura) do usuário 
        do site de ter menos retrabalho ao digita-las, ou, uma vez tendo feito uma escolha, não ter que repeti-la.
            </p>
            <p>
            Qualquer um que tiver o interesse em ter os seus dados apagados do nosso banco, pode acessar o formulário de 
            contato e fazer uma solicitação, que será atendida no menor prazo possível.
            </p>
            <br/>
            <h3><GoPrimitiveDot size={10}/>Sobre informações digitadas em formulários</h3>
            <p>
             A Messenger recebe solicitações de serviço através do seu website e se compromete a não divulgar, distribuir 
             ou vender as informações digitadas por seus usuários para nenhuma outra empresa. Os dados digitados aqui pelos
             Clientes e fornecedores da Messenger Express são somente para uso da Messenger, e, quando necessário, transmitidos 
             para os parceiros da Messenger por exigência de fiscalizações aduaneiras, visando o trânsito de cargas.
            </p>
            <br/>
            <h3><GoPrimitiveDot size={10}/>Sobre Segurança da Informação</h3>
            <p>
            Nosso website é 100% seguro, com um certificado de segurança que garante que toda a comunicação é feita de maneira
            criptografada entre o usuário e o website. Não armazenamos dados de IP e não compartilhamos dados de usabilidade
            com outros websites. O servidor onde o website está hospedado tem uma garantia de uptime e segurança de informações
            de 99,99% do tempo. Falhas de segurança, do Servidor ou do website, serão reportadas aos usuários, quando aplicável. 
            </p>
            <br/>
            <h3><GoPrimitiveDot size={10}/>Sobre Dados recebidos e enviados para Parceiros</h3>
            <p>
            Os dados das cargas que saem e entram no País precisam ser trocados entre a Messenger Express e sua rede de parceiros.
            Esses dados, por obrigação da Receita Federal Brasileira, tem a obrigação de permanecer sob nossa custódia por até 05 
            anos. Esses dados ficam em outro servidor, que não é acessado localmente nem em rede pelo site da Messenger e apenas 
            os funcionários da Messenger e os parceiros tem acesso e o acesso é restrito a somente os dados necessários para a 
            transação eletrônica específica.   
            </p>
            <br/>
            <p>
            Para quaisquer dúvidas ou solicitações a respeito dos tópicos acima, ou sobre como a Messenger Express atende aos 
            requisitos de segurança e transparência na manipulação de dados de terceiros, acesso pelo botão ao lado ao nosso 
            Fale Conosco que o atenderemos no menor prazo possível.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
      <br/> <br/> <br/>
        </div>

   </Container>
  )
}

export default sobre