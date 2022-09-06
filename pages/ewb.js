import React from 'react'
import { Container } from "../styles/pages/ewb";

function ewb() {
  return (
    <Container>
        <h1>Solicitação de Serviço</h1>
        <p>O remetente declara ter conhecimento dos <span><a href="/Termos_e_condicoes_de_transporte.pdf" download>Termos e condições de transporte </a> </span> que regulamentam os serviços Messenger, com os quais concorda no ato da emissão desta guia de embarque.</p>

        <form className="formulario">
        <h3>Dados do Remetente</h3>
        <input type="text" className="input" name="nome" placeholder="Seu Nome" required />
        <input type="text"d className="input" id="cnpjpagador" placeholder="CNPJ da conta pagadora" required />
        <input type="text" className="input" id="razaoSocial" placeholder="Razão Socia" required />
        <input type="text"d className="input" id="cnpj" placeholder="CNPJ ou CPF do Remetente" required />
        <br/>
        <input type="email" className="input" name="email" placeholder="Email do Responsável" required />
        <input type="tel" className="input" name="telefone" placeholder="Telefone para Contato" required />
        <br/>
        <input type="text" className="input" name="endereco" placeholder="Endereço de Origem" required />
        <br/>
        <input type="text" className="input3" name="cep" placeholder="CEP" required />
        <input type="text" className="input3" name="cidade" placeholder="Cidade" required />
        <input type="text" className="input3" name="estado" placeholder="Estado" required />
        <input type="text" className="input3" name="pais" placeholder="País" required />

        <h3>Dados do Destinatário</h3>

        <div>
        <label>Tipo de Remessa:</label>
        <input type="radio" id="Documento" name="remessa" value="Documento" /> 
        <label htmlFor="Documento">Documento</label>
        <input type="radio" id="Mercadoria" name="remessa" value="Mercadoria" />
        <label htmlFor="Mercadoria">Mercadoria</label>
        </div>
        
        <br/>
         <div className="dimencao">
         <label>Peso:</label>
         <input type="text" className="input2" name="peso" placeholder="000kg"  required  />
         <label htmlFor="">Dimensões em cm:</label>
         <input type="text" className="input2" name="altura" placeholder="Altura"  required  />
         <label>x</label>
         <input type="text" className="input2" name="largura" placeholder="Largura" required  />
         <label>x</label>
         <input type="text" className="input2" name="profundidade" placeholder="Profundidade"  required  />
         </div>
      
        
         <input type="text" className="input3" name="notaFiscal" placeholder="Nota Fiscal" required />
         <input type="text" className="input3" name="quantidade" placeholder="Quantidade de Volumes" required  />
         <input type="text" className="input3" name="valor" placeholder="Valor da Mercadoria" required />
         <input type="text" className="input" name="conteudo" placeholder="Descrição do Conteúdo" required  />
         <input type="text" className="input" name="Observacao" placeholder="Observações sobre a carga/manuseio/transporte" required  />

        
        <div>
            <label>Opções de Serviço:</label>

            <input type="radio" id="Standard" name="opServico" value="Standard" /> 
            <label htmlFor="Standard">Standard</label>

            <input type="radio" id="Urgente" name="opServico" value="Urgente" />
            <label htmlFor="Urgente">Urgente</label>
        </div>

        <br/>
         <div className="chek">
            <label>Opções Extras:</label>
            <input type="checkbox" id="RetornoDeProtocolo" name="RetornoDeProtocolo" value="Retorno de Protocolo" />
            <label for="RetornoDeProtocolo">Retorno de Protocolo</label>

         <input type="checkbox" id="NextFlyOut" name="NextFlyOut" value="Next Fly Out" />
         <label for="NextFlyOut">Next Fly Out</label>

         <input type="checkbox" id="DeliveryDutyPaid" name="DeliveryDutyPaid" value="Delivery Duty Paid" />
         <label for="DeliveryDutyPaid">Delivery Duty Paid</label>
         </div>

        </form>
   
   
    </Container>
  )
}

export default ewb