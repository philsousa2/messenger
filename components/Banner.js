 //carousels/Bootstrap.js
 import { useState } from "react";
 import { items } from "../public/Items.json";
 import { Carousel } from "react-bootstrap";
 import "bootstrap/dist/css/bootstrap.min.css";
 import styles from "../styles/Bootstrap.module.css";
 export default function Banner() {
   const { bootstrap } = items;
   const [index, setIndex] = useState(0);
   const handleSelect = (selectedIndex, e) => {
     setIndex(selectedIndex);
   };
   return (
     <Carousel activeIndex={index} onSelect={handleSelect}>
       {bootstrap.map((item) => (
         <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
           <img src={item.imageUrl} alt="slides" />
           <Carousel.Caption className={styles.caption}>
             <h3>{item.title}</h3>
             <p>{item.body}</p>
             <button className="btn btn-danger">Visit Docs</button>
           </Carousel.Caption>
         </Carousel.Item>
       ))}
     </Carousel>
   );
 }


/**
 *   const slides = [
    {
      background: './primeira.jpg',
      title: 'Atendimento Transparente e funcional',
      content1: 'Informações claras e diretas',
      content2:'Flexibilidade no atendimento',
      content3: 'Agilidade nos procedimentos',
      content4: 'Atendimento pessoal e simples',
    },
    {
      background: './1.jpg',
      title: 'Importações e exportações simplificadas',
      content1: 'Importações na modalidade courier',
      content2:'Exportações mais rápidas e práticas',
      content3: 'Rede presente em mais de 200 países',
      content4: 'Operações no aeroportos GIC e GRU',
    },
    {
      background: './3.jpg',
      title: 'Soluções logísticas',
      content1: 'Envios sem preocupações',
      content2:'Facilidade na solicitação de serviços',
      content3: 'Formato prático, simples e rápido',
      content4: 'Solicitações fáceis de cotação e serviços',
    },
    {
      background: './ultima.jpg',
      title: 'Entregas rápidas e seguras',
      content1: 'Rastreamento 100% digital',
      content2:'Importações',
      content3: 'Exportações',
      content4: 'Coletas e entregas em todo Brasil',
    },
  ];

 */