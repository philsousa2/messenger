import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Container } from "../styles/pages/servicos";


function servicos() {
  return (
            
    <Container>
                <div className="servicosInternacionais">
                    <h1>Serviços Internacionais</h1>
                    <Accordion>
                        <AccordionSummary
                       
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <h3>Exportação de documentos e cargas</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Serviço de entregas porta a porta de documentos e cargas. A Messenger opera através 
                        da rede GDA - Global Distribution Alliance, presente em mais de 220 países. Saiba mais.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                       
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <h3>Importação de encomenda expressa</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Importação de bens e produtos não destinados a revenda, através do Regime de Tributação Simplificada. Uma solução para atender
                         importações urgentes, no menor prazo, pela melhor relação de custo/benefício. Saiba mais.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion disabled>
                        <AccordionSummary
                      
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography>Disabled Accordion</Typography>
                        </AccordionSummary>
                    </Accordion>
                    </div>

    </Container>
  )
}

export default servicos