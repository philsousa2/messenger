import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { GoCheck } from "react-icons/go";

const Banner = () => {
    const [close, setClose] = useState(false);
    
    useEffect(() => {
        const e = document.getElementById("cont");
        e.style.animation = "none";
        e.style.opacity = 0;
        setClose(false);
        
        setTimeout(function() {
            e.style.opacity = 1;
            e.style.animation = "";
        }, 200);
    }, [close]);

    return (
        <div className="slide-container">
            <Zoom>
                <div className="each-slide-effect">
                    <div className="img1" id="cont">
                        <h1 className="titulo">Atendimento Transparente e funcional</h1>
                        <div className="info">
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Informações claras e diretas</h2>
                            </div>
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Flexibilidade no atendimento</h2>
                            </div>
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Agilidade nos procedimentos</h2>
                            </div>
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Atendimento pessoal e simples</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className="img2" id="cont">
                        <h1 className="titulo">Importações e exportações simplificadas</h1>
                        <div className="info">
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Importações na modalidade courier</h2>
                            </div>
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Exportações mais rápidas e práticas</h2>
                            </div>
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Rede presente em mais de 200 países</h2>
                            </div>
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Operações no aeroportos GIC e GRU</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="each-slide-effect" id="cont">
                    <div className="img3">
                        <h1 className="titulo">Soluções logísticas</h1>
                        <div className="info">
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Envios sem preocupações</h2>
                            </div>
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Facilidade na solicitação de serviços</h2>
                            </div>
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Formato prático, simples e rápido</h2>
                            </div>
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Solicitações fáceis de cotação e serviços</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="each-slide-effect" id="cont">
                    <div className="img4">
                        <h1 className="titulo">Entregas rápidas e seguras</h1>
                        <div className="info">
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Rastreamento 100% digital</h2>
                            </div>
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Importações</h2>
                            </div>
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Exportações</h2>
                            </div>
                            <div className="infotxt">
                                <GoCheck className="icon"/>
                                <h2>Coletas e entregas em todo Brasil</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default Banner;
