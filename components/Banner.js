import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Banner extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="./primeira.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./1.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="./3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

ReactDOM.render(<Banner />, document.querySelector('.demo-carousel'));

export default Banner;

/** 
  const slides = [
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