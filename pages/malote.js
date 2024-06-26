import React from 'react'
import { Container } from "../styles/pages/malote";
import Image from 'next/image'
import { GoTriangleRight } from "react-icons/go";

function malote() {
  return (
    <Container>
        <div className="Container">
           
            <div className="txt">
                <h1>SERVIÇO DE MALOTE</h1>
                <br/> <br/>
                <p>
                    A Messenger Express oferece serviço regular para transferência consolidada de documentos, entre quaisquer cidades atendidas pela rede nacional.
                </p>
                <br/> 
                <p>
                    O serviço pode ter frequência diária. O Cliente indica, previamente, local das coletas, entregas e horários da operação.
                </p>
                <br/> 
                <p>
                    Esta é a forma mais prática e segura de interligar empresas às suas filiais, bases, representantes ou parceiros.  
                </p>
                <br/> <br/>
                <h1>CONDIÇÕES DO SERVIÇO</h1>
                <br/> <br/>
                <ul>
                    <li><GoTriangleRight/> Frequência e regularidade conforme a necessidade do Cliente.</li>
                    <li><GoTriangleRight/> Horários pré-estabelecidos para a retirada e entrega dos malotes.</li>
                    <li><GoTriangleRight/> Serviço de rastreamento com informação disponível na web.</li>
                    <li><GoTriangleRight/> Franquia mensal de peso com cobrança adicional por Kg excedente.</li>
                    <li><GoTriangleRight/> Faturamento mensal, com prazo de pagamento de dez dias.</li>
                    <li><GoTriangleRight/> Não disponível para transferência de <span>valores e produtos restritos</span> </li>
                </ul>
                <br/>
                <h3>Consulte a central de serviços. Informações pelo e-mail: <a href='mailto:imp.brasil@messenger.com.br'>imp.brasil@messenger.com.br</a>.</h3>
                <a href="/Messenger_MPak_1023.pdf" download>
                    <button className="btn"> Download PDF </button>
                </a>
                {/**
                 * <p>A Messenger Express possui uma rede de escritórios e agentes, para o atendimento com prazos e
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
            <button   className="btn"> Download PDF </button>
  </a> **/}
        </div></div>
    </Container>
  )
}

export default malote