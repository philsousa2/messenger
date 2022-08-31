import React from 'react'
import Link from 'next/link'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Container } from "../styles/pages/servicos";
import { GoChevronDown } from "react-icons/go";

function servicos() {
  return (
            
    <Container>
        <div className="servicos">
        <h1>Serviços Internacionais:</h1>
                <div className="servicosInternacionais">                  
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<GoChevronDown  size={25} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <h3>Exportação de documentos e cargas</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Serviço de entregas porta a porta de documentos e cargas. A Messenger opera através 
                        da rede GDA - Global Distribution Alliance, presente em mais de 220 países.<span> <Link href="/encomendaExpressa">Saiba mais.</Link> </span>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<GoChevronDown  size={25} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <h3>Importação de encomenda expressa</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Importação de bens e produtos não destinados a revenda, através do Regime de Tributação Simplificada. Uma solução para atender
                         importações urgentes, no menor prazo, pela melhor relação de custo/benefício. <span> <Link href="/importacao">Saiba mais</Link></span>.
                        </Typography>
                        </AccordionDetails>
                    </Accordion> 
                </div>

                <h1>Serviços Nacionais:</h1>

                <div className="servicosNacionais">                  
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<GoChevronDown  size={25} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <h3>Messenger Local</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Serviço regular de mensageiros profissionais para qualquer parte da cidade. 
                        O cliente indica onde coletar, o local da entrega e horários.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<GoChevronDown  size={25} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <h3>Messenger Nacional</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Entregas porta a porta de documentos e encomendas em mais de duas mil 
                        localidades no território nacional, com a mesma tecnologia de rastreamento utilizada nos embarques internacionais.
                        </Typography>
                        </AccordionDetails>
                    </Accordion> 
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<GoChevronDown  size={25} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <h3>Malote</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Serviço regular para transferência consolidada de documentos, entre quaisquer cidades atendidas pela rede nacional.
                         O serviço pode ter frequencia diária e o cliente indica onde coletar, o local da entrega e os horários da operação.<span><Link href="/malote"> Saiba mais</Link></span>.
                        </Typography>
                        </AccordionDetails>
                    </Accordion> 
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<GoChevronDown  size={25} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <h3>Modalidades</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                      <span>Standard:</span> Prazos de entrega pré-definidos. Consulte a central de serviços.
                     <br/><br/>
                      <span>Urgente:</span> Necessidades especiais relacionadas ao atendimento de prazos diferenciados e entregas com hora marcada. Esta modalidade não está disponível para os serviços Messenger Internacional.
                      <br/><br/>
                      <span>Retorno de Protocolo:</span> Retorno de protocolo de entrega assinado pelo destinatário.
                       </Typography>
                        </AccordionDetails>
                    </Accordion> 
                </div>
</div>
    </Container>
  )
}

export default servicos

