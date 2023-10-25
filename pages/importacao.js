import React from 'react'
import { Container } from "../styles/pages/malote";
import Image from 'next/image'
import { GoTriangleRight } from "react-icons/go";

function importacao() {
    return (
        <Container>
            <div className="Container">

                <div className="txt">
                    <h1>QUICK IMPORT®</h1>
                    <br /> <br />
                    <p>
                        A Messenger Express oferece uma solução para
                        importações expressas, provenientes de qualquer
                        país atendido pela rede internacional.
                    </p>
                    <br />
                    <p>
                        O QUICK IMPORT® é um serviço desenvolvido para
                        atender àquelas importações urgentes e imprevistas,
                        no menor prazo possível, pela melhor relação de
                        custo / benefício do mercado.
                    </p>
                    <br />
                    <p>
                        São 30 anos de experiência no atendimento às necessidades de logística expressa de pequenas
                        e grandes empresas. Uma reputação construída com base na busca constante da excelência e
                        relações sólidas com clientes, técnicos e autoridades reguladoras.

                    </p>
                    <br /> <br />
                    <h1>CONDIÇÕES GERAIS</h1>
                    <br /> <br />
                    <ul>
                        <li><GoTriangleRight /> Importações pelo Regime de Tributação Simplificada (DIR IN-RFB 1737/2017):
                            <ol>
                                <li>Imposto de Importação: 60%.</li>
                                <li>ICMS: 17% (pode variar, conforme alíquota do Estado da federação).</li>
                            </ol>
                        </li>
                        <li><GoTriangleRight /> Bens e mercadorias até o valor de US$ 3,000 (FOB).</li>
                        <li><GoTriangleRight /> Pagamento antecipado das taxas e impostos (CIF).</li>
                        <li><GoTriangleRight /> Fórmula de cubagem aplicável: Largura (cm) x Altura (cm) x Comprimento (cm) / 5,000.</li>
                        <li><GoTriangleRight /> Serviço limitado a 35 Kg por conhecimento de embarque.</li>
                    </ul>

                    <br /> <br />
                    <h1>SERVIÇOS INCLUSOS</h1>
                    <br /> <br />
                    <ul>
                        <li><GoTriangleRight />Retirada da carga na origem.</li>
                        <li><GoTriangleRight />Emissão dos documentos de embarque.</li>
                        <li><GoTriangleRight />Frete internacional até o Brasil.</li>
                        <li><GoTriangleRight />Desembaraço pelo processo simplificado de remessa expressa..</li>
                        <li><GoTriangleRight />Transferência e entrega no destino final.</li>
                        <li><GoTriangleRight />Frete prepaid ou collect(*).</li>
                    </ul>
                    <br /> <br />
                </div>
                <h3>Consulte a central de serviços. Informações pelo e-mail: <a href='mailto:imp.brasil@messenger.com.br'>imp.brasil@messenger.com.br</a>.</h3>
                <a href="/Messenger_impex_1023.pdf" download>
                    <button className="btn"> Download PDF </button>
                </a>
            </div>
        </Container>
    )
}

export default importacao