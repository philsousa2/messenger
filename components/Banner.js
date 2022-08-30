import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { GoCheck } from "react-icons/go";

const Banner = () => {
    const images = [
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
        "/4.jpg",
    ];

    return (
      <div className="slide-container">
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <h1 className="titulo" >Atendimento Transparente e funcional</h1>
                    <div className="info">
                        <div className="infotxt">
                            <GoCheck   size={40}/>
                            <h2>Informações claras e diretas</h2>
                        </div>
                        <div className="infotxt">
                            <GoCheck  size={40}/>
                            <h2>Flexibilidade no atendimento</h2>
                        </div>
                        <div className="infotxt">
                            <GoCheck  size={40}/>
                            <h2>Agilidade nos procedimentos</h2>
                        </div>
                        <div className="infotxt">
                            <GoCheck  size={40}/>
                            <h2>Atendimento pessoal e simples</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                <h1 className="titulo" >Importações e exportações simplificadas</h1>
                    <div className="info">
                        <div className="infotxt">
                            <GoCheck   size={40}/>
                            <h2>Importações na modalidade courier</h2>
                        </div>
                        <div className="infotxt">
                            <GoCheck  size={40}/>
                            <h2>Exportações mais rápidas e práticas</h2>
                        </div>
                        <div className="infotxt">
                            <GoCheck  size={40}/>
                            <h2>Rede presente em mais de 200 países</h2>
                        </div>
                        <div className="infotxt">
                            <GoCheck  size={40}/>
                            <h2>Operações no aeroportos GIC e GRU</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                <h1 className="titulo" >Soluções logísticas</h1>
                    <div className="info">
                        <div className="infotxt">
                            <GoCheck   size={40}/>
                            <h2>Envios sem preocupações</h2>
                        </div>
                        <div className="infotxt">
                            <GoCheck  size={40}/>
                            <h2>Facilidade na solicitação de serviços</h2>
                        </div>
                        <div className="infotxt">
                            <GoCheck  size={40}/>
                            <h2>Formato prático, simples e rápido</h2>
                        </div>
                        <div className="infotxt">
                            <GoCheck  size={40}/>
                            <h2>Solicitações fáceis de cotação e serviços</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                <h1 className="titulo" >Entregas rápidas e seguras</h1>
                    <div className="info">
                        <div className="infotxt">
                            <GoCheck   size={40}/>
                            <h2>Rastreamento 100% digital</h2>
                        </div>
                        <div className="infotxt">
                            <GoCheck  size={40}/>
                            <h2>Importações</h2>
                        </div>
                        <div className="infotxt">
                            <GoCheck  size={40}/>
                            <h2>Exportações</h2>
                        </div>
                        <div className="infotxt">
                            <GoCheck  size={40}/>
                            <h2>Coletas e entregas em todo Brasil</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
        </div>
    );
};

export default Banner;