import Carousel from 're-carousel'
import IndicatorDots from './indicator-dots'
import Buttons from './buttons'

const Banner = () => {
  
    return <Carousel loop auto widgets={[IndicatorDots, Buttons]}>
      <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
      <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
      <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
    </Carousel>
  }
 

export default Banner;

/**
 * const slides = [
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
 * 
 */