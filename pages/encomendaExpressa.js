import React from 'react'
import { Container } from "../styles/pages/encomendaExpressa";
import Image from 'next/image'
import { GoTriangleRight } from "react-icons/go";

function encomendaExpressa() {
  return (
    <Container>
        <div className="Container">
            <div className="txt">
                <h1>SERVIÇOS</h1>
                <br/> <br/>
                <p>
                As cadeias de suprimentos modernas demandam soluções sob
                medida para o atendimento às necessidades especiais de
                logística expressa, sobretudo aquelas relacionadas ao transporte
                porta a porta de documentos e cargas urgentes
                </p>
                <br/> 
                <p>
                A Messenger Express representa uma alternativa consistente,
                sempre entregando a melhor relação de custo / benefício do
                mercado.
                </p>
                <br/> 
                <p>
                Atendimento personalizado e informação confiável são
                características sempre presentes no atendimento da Messenger. 
                </p>
                <br/> 
                <p>
                A satisfação do cliente é a nossa entrega mais importante.
                </p>
                <br/> <br/>
                <h1>SERVIÇO NACIONAL DE ENTREGAS</h1>
                <br/> <br/>
                <p>
                Serviço de transporte doméstico porta a porta, para documentos e encomendas em mais de duas
                mil localidades no território nacional, com a mesma tecnologia de rastreamento empregada no
                acompanhamento das cargas internacionais.
                </p>
                <br/> 
                <p>
                A Messenger Express possui uma rede de escritórios e agentes, para o atendimento de prazos e
                tarifas dimensionados às necessidades dos clientes.
                </p>
                <br/> 
                <p>
                Oferece também serviço de malotes entre as principais cidades brasileiras, com frequência diária
                e entregas com hora marcada.
                </p>
                <br/> 

                <br/> <br/>
                <h1>REMESSA EXPRESSA INTERNACIONAL</h1>
                <br/> <br/>
                <p>No Brasil, a Messenger Express é responsável pelas operações
                de empresas internacionais de courier e carga expressa como,
                International Bonded Couriers – IBC, Inc., Overseas Courier Service - OCS e Cacesa Express, além de integrar a rede Global Distribution Alliance – GDA. Por OCS- Overseas Courier Service e Triton Logistics.
                </p>
                <br/>
                <p>Opera globalmente através de uma estrutura com oito centros de
                distribuição – hubs, e 600 escritórios em mais de 180 países</p>
                <br/>
                <p>Possui um dos mais modernos e eficientes sistemas de
                    rastreamento em operação no Mundo: o Pactrak, que mantém o
                    controle e o gerenciamento eletrônico de todas as cargas em
                    trânsito.
                </p>
                <br/>
                <ul>
                    <li><GoTriangleRight/><span>DOC -</span>Serviço internacional para transporte de documentos</li>
                    <li><GoTriangleRight/><span>APX -</span> Air Parcel Express. Encomenda expressa internacional, porta a porta.</li>
                    <li><GoTriangleRight/><span>QIP -</span>Quick Import Parcel. Serviço de importação pelo regime aduaneiro simplificado</li>
                  
                </ul>
                <br/> <br/>
            </div>
            <h3>Consulte a Central de Serviços mais próxima e solicite a visita de um representante comercial.</h3>
            <a href="/Messenger_servicos_web_0816.pdf" download>
            <button   className="btn"> Download PDF </button>
            </a>
        </div>
    </Container>
  )
}

export default encomendaExpressa



