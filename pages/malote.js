import React from 'react'
import { Container } from "../styles/pages/malote";
import Image from 'next/image'
import Button from '@mui/material/Button';
import { GoTriangleRight } from "react-icons/go";

function malote() {
  return (
    <Container>
        <div className="Container">
            <Image  src="/logomarca.png" alt="Logo" width={350} height={120} margin-left={50} />
            <div className="txt">
                <h1>M PAK® - SERVIÇO DE MALOTE</h1>
                <br/> <br/>
                <p>
                    A Messenger Express oferece serviço regular para transferência consolidada de documentos,
                entre quaisquer cidades atendidas pela rede nacional.
                </p>
                <br/> 
                <p>
                    O serviço pode ter freqüência diária e o Cliente indica onde coletar, o local da entrega e os
                horários da operação.
                </p>
                <br/> 
                <p>
                Esta é a forma mais prática e segura de interligar empresas às suas filiais, representantes e
                parceiros.  
                </p>
                <br/> <br/>
                <h1>CONDIÇÕES DO SERVIÇO</h1>
                <br/> <br/>
                <ul>
                    <li><GoTriangleRight/> Freqüência e regularidade conforme a necessidade do Cliente</li>
                    <li><GoTriangleRight/> Horários pré-estabelecidos para a retirada e entrega dos malotes</li>
                    <li><GoTriangleRight/> Serviço de rastreamento on line com informação disponível na web</li>
                    <li><GoTriangleRight/> Franquia mensal de peso com cobrança adicional por Kg excedente</li>
                    <li><GoTriangleRight/> Faturamento mensal, com prazo de pagamento de sete dias.</li>
                    <li><GoTriangleRight/> Necessária emissão de nota fiscal para transferência de materiais</li>
                    <li><GoTriangleRight/> Não disponível para transferência de <span>valores e produtos restritos</span> </li>
                </ul>
                <br/>
                <p>A Messenger Express possui uma rede de escritórios e agentes, para o atendimento com prazos e
                    tarifas dimensionados às necessidades dos Clientes.</p>
                <br/> <br/>
                <h1>SOBRE A MESSENGER</h1>
                <br/> <br/>
                <p>No Brasil, a Messenger Express é responsável pelas operações da International Bonded Couriers,
                Inc., empresa norte-americana especializada em serviços de entregas expressas em todo o
                Mundo, transportando amostras, mercadorias e documentos comerciais.
                </p>
                <br/>
                <p>A IBC, Inc. opera globalmente através de uma estrutura de oito centros de distribuição e escritórios
                em mais de 50 países.</p>
                <br/>
                <p>Para conhecer outros serviços da Messenger, solicite a visita de um representante comercial.</p>
                <br/> <br/>
            </div>
            <h3>Consulte o departamento de atendimento a Clientes mais próximo e solicite uma cotação.</h3>

            <a href="/Messenger_pak_web_0716.pdf" download>
            <Button className="btn" variant="contained" disableElevation>
            Download PDF
            </Button>
            </a>
        </div>
    </Container>
  )
}

export default malote