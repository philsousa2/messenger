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
        <input type="text" className="input" id="cnpjpagador" placeholder="CNPJ da conta pagadora" required />
        <input type="text" className="input" id="razaoSocial" placeholder="Razão Socia" required />
        <input type="text" className="input" id="cnpj" placeholder="CNPJ ou CPF do Remetente" required />
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

        
        <select className="opcao" name="remessa"  required>
                <option value="DEFAULT" hidden >Tipo de Remessa</option>
                <option value="Documento">Documento</option>
                <option value="Mercadoria">Mercadoria</option>
        </select>  
       
        
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

        
      
            <h3>Opções de Serviço:</h3>

            <select className="opcao" name="remessa"  required>
                <option value="DEFAULT" hidden>Opções de Serviço:</option>
                <option value="Standard ">Standard </option>
                <option value="Urgente">Urgente</option>
        </select>  
       

        <br/>
         <div className="chek">
            <label>Opções Extras:</label>
            <input className="radio"  type="checkbox" id="RetornoDeProtocolo" name="RetornoDeProtocolo" value="Retorno de Protocolo" />
            <label htmlFor="RetornoDeProtocolo">Retorno de Protocolo</label>

         <input className="radio"  type="checkbox" id="NextFlyOut" name="NextFlyOut" value="Next Fly Out" />
         <label htmlFor="NextFlyOut">Next Fly Out</label>

         <input className="radio"  type="checkbox" id="DeliveryDutyPaid" name="DeliveryDutyPaid" value="Delivery Duty Paid" />
         <label htmlFor="DeliveryDutyPaid">Delivery Duty Paid</label>
         </div>

         <div>
            <h3>Deseja solicitar coleta desta e-WB?</h3>

            <input className="radio"  type="radio" id="sim" name="coleta" value="SIM" /> 
            <label htmlFor="sim">SIM</label>

            <input className="radio" type="radio" id="nao" name="coleta" value="NAO" />
            <label htmlFor="nao">NÃO</label>
        </div>
         <button  type="submit" className="btn">ENVIAR</button>    
        </form>
   
   
    </Container>
  )
}

export default ewb