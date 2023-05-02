import React from 'react'
import { styled } from '@mui/material/styles';
import { GoChevronRight } from "react-icons/go";
import { Container } from "../styles/pages/ajuda";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));



const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<GoChevronRight  className="icon" />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Perguntas() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container>
  

    <div className="accordion">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary className="summary" aria-controls="panel1d-content" id="panel1d-header">
          <h2>O que é uma remessa expressa internacional?</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          .. Ramon fazendo um teste.. O serviço de remessa expressa internacional é destinado ao transporte de documentos e bens que 
          requeiram agilidade e simplificação nos trâmites de desembaraço aduaneiro. Na importação, não 
          são aceitos bens destinados a revenda ou á industrialização.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary className="summary" aria-controls="panel2d-content" id="panel2d-header">
          <h2>Qual o limite de valor para uma remessa expressa internacional?</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Na importação: USS 3 mil ou o equivalente em outra moeda Na exportação: Amostras sem destinação 
          comercial até o valor de USS 5 mil. Exportações com ou sem cobertura cambial até o valor de USS 50 mil.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary className="summary" aria-controls="panel3d-content" id="panel3d-header">
          <h2>Há limite de valor com isenção tributária na importação simplificada?</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Não existe valor isento de tributação. Entretanto, o importador poderá se beneficiar de isenção para
          alguns produtos. como livros, arquivos registrados em mídias eletrônicas (exceto software) e bagagem desacompanhada.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary className="summary" aria-controls="panel4d-content" id="panel4d-header">
          <h2>Como é feito o recolhimento das taxas e impostos na importação simplificada?</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          O importador deposita o valor das taxas e impostos previamente ao despacho. o que 
          corresponde á aliquota de 60% referente ao imposto de importação e ICMS conforme aliquota 
          do Estado da Federação ao qual se destina a remessa. A Messenger recolhe os tributos à Receita
           Federal. Secretarias de Fazenda e taxas administrativas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary className="summary" aria-controls="panel5d-content" id="panel5d-header">
          <h2>Posso exportar com fechamento de câmbio através do regime simplificado?</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sim, até o limite de US$ 50 mil. A operação terá registro no SISCOMEX através de um procedimento 
          denominado DSE ? Declaração Simplificada de Exportação, que permitirá ao exportador celebrar o 
          contrato de câmbio e receber as divisas remetidas pelo importador por intermédio de um banco.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary className="summary" aria-controls="panel6d-content" id="panel6d-header">
          <h2>Existe limite de peso para uma remessa expressa?</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Não, em teoria. Entretanto, a rede Messenger está dimensionada para processar volumes com peso de até 35 kg.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary className="summary" aria-controls="panel7d-content" id="panel7d-header">
          <h2>O que não pode ser transportado como remessa expressa?</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Bens usados ou recondicionados, bebidas alcoólicas (na importação), moeda corrente, créditos ao portador, 
          armas e munições, fumo, animais e vegetais silvestres, 
          pedras preciosas e semipreciosas. A Messenger faz restrições ao transporte de outros materiais.Saiba mais
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary className="summary" aria-controls="panel8d-content" id="panel8d-header">
          <h2>Qual a legislação que regulamenta as atividades das empresas de transporte expresso internacional?</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          As atividades das empresas de remessa expressa, também denominadas couriers, são regulamentadas pela IN R FB 1073 / 
          2010. Existe também uma associação das empresas operadoras de serviços courier chamada ABRAEC.Saiba mais
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary className="summary" aria-controls="panel9d-content" id="panel9d-header">
          <h2>O que é um AWB (Airbill)?</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          É o documento para registro e transporte das remessas, de onde consta endereço do remetente, 
          destinatário e informações sobre o conteúdo. O AWB acompanha todas as remessas e deve ser emitido pelo remetente.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary className="summary" aria-controls="panel10d-content" id="panel10d-header">
          <h2>O que é Ad Valorem?</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No segmento de transportes, ad valorem é o valor agregado ao valor total do frete de
           uma mercadoria. Neste caso, o ad valorem baseia-se no valor da nota fiscal dos produtos,
            ou seja, no valor total das mercadorias que não estão asseguradas quando não estão em tráfego.
          </Typography>
          <br/>
          <Typography>
          O ad valorem não elimina a necessidade de contratação de seguro, pois se refere apenas ao seguro 
          de responsabilidade civil que a empresa de transporte é obrigada a contratar.
          </Typography>
          <br/>
          <Typography>
          Na Messenger, o ad valorem é fixado em 1% do valor da mercadoria, declarado em nota fiscal, com mínimo de R$ 5,00.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary className="summary" aria-controls="panel11d-content" id="panel11d-header">
          <h2>O que é ‘cubagem’?</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Cubagem é a relação entre o volume e o peso da mercadoria transportada, que é medida através
           de um cálculo matemático, onde se verifica a correspondência entre o peso e o volume que a 
           carga ocupa no veículo de transporte, seja caminhão, aeronave ou navio. A forma de cálculo 
           é diferente para cada modal de transporte.
          </Typography>
          <br/>
          <Typography>
          Para calcular a cubagem das remessas transportadas por empresas de encomenda expressa, aplique a seguinte fórmula: Altura (cm) x Comprimento (cm) x Largura (cm) / 5.000 = Peso Cubado
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary className="summary" aria-controls="panel12d-content" id="panel12d-header">
          <h2>Exigências Gerais de Embalagem</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A Messenger oferece gratuitamente envelopes em PVC (paks) para transporte de documentos e encomendas não
         frágeis. As demais embalagens são de responsabilidade do remetente,  devendo seguir os critérios abaixo.
          Se necessário, a Messenger poderá indicar empresa especializada em embalagens.
          </Typography>
          <br/>
          <Typography>
          - As embalagens, sem exceções, devem ser resistentes em relação ao seu conteúdo.
          </Typography>
          <br/>
          <Typography>
          - Mercadorias devem ser inteiramente protegidas em embalagens suficientemente fortes, seguramente fechadas, de 
          forma a impedir deslocamentos, vazamentos ou danos ao conteúdo, como, por exemplo, embalagens de madeira ou plástico sólido.
          </Typography>
          <br/>
          <Typography>
          - A embalagem deve ser construída de tal forma que ofereça resistência às mudanças de temperatura e umidade.
          </Typography>
          <br/>
          <Typography>
          - É recomendável que o embarcador indique, na parte externa da embalagem, nome, endereço e telefone do 
          destinatário, bem como quantidade de volumes, no caso de embarques multi-peças.
          </Typography>
          <br/>
          <Typography>
          - A Messenger restringe-se ao direito de vetar a aceitação de cargas que não estejam devidamente embaladas. 
          Conforme monopólio postal, não poderão ser aceitos documentos em envelopes comuns ou pardos. Documentos devem 
          ser acondicionados nos paks fornecidos pela Messenger ou pelo remetente, desde que se enquadre nos padrões de 
          segurança e resistência exigidos.
          </Typography>
          <br/>
        </AccordionDetails>
      </Accordion>

    </div>
    </Container>
  );
}
