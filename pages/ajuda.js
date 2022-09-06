import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Perguntas from '../components/Perguntas';
import { Container } from "../styles/pages/ajuda";
import Button from '@mui/material/Button';
import Link from 'next/link'  


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Ajuda() {



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value, setValue] = useState(0)

  return (
    <Container>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Perguntas Frequentes" {...a11yProps(0)} />
          <Tab label="Links Úteis" {...a11yProps(1)} />
          <Tab label="Documentos e Formulários" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Perguntas/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="links">
       <h1>Links Úteis</h1>
       <ul>
        <li><a href="https://idg.receita.fazenda.gov.br/orientacao/aduaneira/encomendas-e-remessas/remessa-expressa/perguntas-e-respostas" target="_blank" rel="noreferrer"><h3>FAQ da Receita Federal sobre remessa expressa</h3></a></li>
        <li><a href="http://www.agricultura.gov.br/comunicacao/noticias/2015/09/mapa-define-regras-de-fiscalizacao-de-embalagens-de-madeira" target="_blank" rel="noreferrer"><h3>Regras para importação e exportação de embalagens de madeira</h3></a></li>
        <li><a href="http://www.receitalazenda.gov.br/" target="_blank" rel="noreferrer"><h3>Receita Federal Brasileira</h3></a></li>
        <li><a href="http://portal.anvisa.gov.br/" target="_blank" rel="noreferrer"><h3>ANVISA - Agência Nacional de Vigilância Sanitária</h3></a></li>
        <li><a href="http://sistemasweb.agricultura.gov.br/pages/SIGVIG.html" target="_blank" rel="noreferrer"><h3>VigiAgro</h3></a></li>
        <li><a href="http://www.abraec.org.br/" target="_blank" rel="noreferrer"><h3>ABRAEC -AssociaçãoBrasileira das Empresas de Transporte Internacional Expresso deCargas</h3></a></li>
        <li><a href="http://www.aduaneiras.com.br/?gclid=Cj0KEQjwl-e4BRCwqeWkv8TWqOoBEiQAMocbPyWEFCWhsc-iSpjxg4VAFMHH9R2sdBy3v-mKEyNiiAwaAq5q8P8HAQ" target="_blank" rel="noreferrer"><h3>Consulta e conversão de moedas</h3></a></li>
        <li><a href="http://www.bcb.gov.br/" target="_blank" rel="noreferrer"><h3>Banco Central do Brasil</h3></a></li>
       </ul>
       </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="links">
              <h1>Documentos e Formulários</h1>
              <br/>
              <h3>Faça o Download dos arquivos em formato de PDF ou DOC:</h3>
              <div className="btns">
                  <a href="/Form_commercial_invoice.doc" download>
                    <Button className="btn" variant="contained" disableElevation>
                     Form Comercial Invoice
                    </Button>
                  </a>

                  <a href="/Messenger_compliance_0216.pdf" download>
                    <Button className="btn" variant="contained" disableElevation>
                    Nosso Código de Conduta
                    </Button>
                  </a>
              </div>
              <div className="btns">
                  <a href="/Declaracao_de_Nao_Emitente_de_NF-v4_080118.docx" download>
                    <Button className="btn" variant="contained" disableElevation>
                    Declaração de não emitente de NF
                    </Button>
                  </a>

                  <Link href="/compliance">
                    <Button className="btn" variant="contained" disableElevation>
                    Compliance da Messenger Express com os Requisitos da UE
                    </Button>
                  </Link>
              </div>
          
        </div>

       
      </TabPanel>
    </Box>
    </Container>
  );
}
