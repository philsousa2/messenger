import React, { useState, useEffect } from 'react';
import { GoCheck } from "react-icons/go";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 9000); // Tempo de 9 segundos

    setIntervalId(interval);

    return () => {
      clearInterval(interval);
    };
  }, []);



  
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

  const goToSlide = (index) => {
    setActiveSlide(index);
    resetTimer();
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    resetTimer();
  };

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(intervalId);

    // Adiciona uma classe para reiniciar a animação dos elementos com a classe 'TxtinfoH2'
    const h2Elements = document.querySelectorAll('.TxtinfoH2');
    h2Elements.forEach((h2) => {
      h2.classList.remove('reset-animation');
      void h2.offsetWidth; // Trigger reflow to restart the animation
      h2.classList.add('reset-animation');
    });

    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
      // Adiciona uma classe para reiniciar a animação dos elementos com a classe 'TxtinfoH2'
      const h2Elements = document.querySelectorAll('.TxtinfoH2');
      h2Elements.forEach((h2) => {
        h2.classList.remove('reset-animation');
        void h2.offsetWidth; // Trigger reflow to restart the animation
        h2.classList.add('reset-animation');
      });

    }, 9000);

    setIntervalId(interval);
  };

  return (
    <div className="banner">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.background})`,
              animationDuration: '5s',
            }}
          >
            <div className="slide-content">
                <div className='infoContainerBanner'>
              <h2 className='tituloBanner'>{slide.title}</h2>
              <div className='infoBanner'>
                

              <div className='Txtinfo'><div className="checkbox"><GoCheck  /></div><h2 className='TxtinfoH2'>{slide.content1}</h2></div>

              <div className='Txtinfo'><div className="checkbox"><GoCheck  /></div><h2 className='TxtinfoH2'>{slide.content2}</h2></div>

              <div className='Txtinfo'><div className="checkbox"><GoCheck  /></div><h2 className='TxtinfoH2'>{slide.content3}</h2></div>

              <div className='Txtinfo'><div className="checkbox"><GoCheck  /></div><h2 className='TxtinfoH2'>{slide.content4}</h2></div>
              
            </div>
        
              </div>
            </div>
          </div>
      ))}
      </div>

      <div className="controls">
        <button className="prev-button" onClick={prevSlide}>
          &lt;
        </button>
        <button className="next-button" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Banner;
