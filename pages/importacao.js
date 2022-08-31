import React from 'react'
import { Container } from "../styles/pages/malote";
import Image from 'next/image'
import Button from '@mui/material/Button';
import { GoTriangleRight } from "react-icons/go";

function importacao() {
  return (
    <Container>
        <div className="Container">
            <Image  src="/logomarca.png" alt="Logo" width={350} height={120} margin-left={50} />
            <div className="txt">
                <h1>QUICK IMPORT PARCEL®</h1>
                <br/> <br/>
                <p>
                A Messenger Express oferece uma solução para
                importações expressas, provenientes de qualquer
                país atendido pela rede internacional.
                </p>
                <br/> 
                <p>
                O QUICK IMPORT PARCEL® é um serviço
                desenvolvido para atender àquelas importações
                urgentes e imprevistas, no menor prazo, pela melhor
                relação de custo / benefício. 
                </p>
                <br/> 
                <p>
                São mais de 20 anos de experiência no atendimento às necessidades de logística expressa de
                pequenas e grandes empresas. Uma reputação construída através da busca constante pela
                excelência e relações sólidas com clientes, técnicos e autoridades reguladoras.
  
                </p>
                <br/> <br/>
                <h1>CONDIÇÕES GERAIS</h1>
                <br/> <br/>
                <ul>
                    <li><GoTriangleRight/> Importação de encomenda expressa internacional, regulamentada pelo Regime de Tributação
                    Simplificada (DIRE, IN-RFB 1073 / 2010)
                         <ol>
                            <li>Imposto de Importação: 60%</li>
                            <li>ICMS: Conforme alíquota do destino</li>
                        </ol>
                    </li>
                    <li><GoTriangleRight/> Bens e mercadorias não destinados a revenda, até o valor de US$ 3,000</li>
                    <li><GoTriangleRight/> Pagamento antecipado das taxas e impostos</li>
                    <li><GoTriangleRight/> Fórmula de cubagem aplicável: largura (cm) x altura (cm) x comprimento (cm) / 5.000</li>
                    <li><GoTriangleRight/> Serviço limitado a 30 Kg por conhecimento de embarque</li>
                </ul>
                
                <br/> <br/>
                <h1>SERVIÇOS INCLUSOS</h1>
                <br/> <br/>
                <ul>
                    <li><GoTriangleRight/>Retirada da carga no mesmo dia para solicitações até 12h00 *</li>
                    <li><GoTriangleRight/>Emissão dos documentos de embarque</li>
                    <li><GoTriangleRight/>Frete internacional até o Brasil</li>
                    <li><GoTriangleRight/>Desembaraço pelo processo simplificado de remessa expressa</li>
                    <li><GoTriangleRight/>Transferência e entrega no destino final</li>
                    <li><GoTriangleRight/>Frete prepaid ou collect</li>
                </ul>
                <br/> <br/>
            </div>
            <h3>Consulte a Central de Serviços e solicite uma cotação: <a href='mailto:imp.brasil@messenger.com.br'>imp.brasil@messenger.com.br</a></h3>
            <a href="/Messenger_IMP_web_0716.pdf" download>
            <Button className="btn" variant="contained" disableElevation>
            Download PDF
            </Button>
            </a>
        </div>
    </Container>
  )
}

export default importacao