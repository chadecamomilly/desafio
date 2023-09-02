import './Cta.css'
import lata3 from './lata-guarana3.png'
import lata4 from './lata-guarana4.png'
import lata5 from './lata-guarana5.png'

function Cta() {
    return (
        <div className="fundo-verde">
            <div className="container-cta">
                <div className="cta-esquerda">
                    <img src={lata3} className="lata3" alt="Lata Guaraná" />
                    <img src={lata4} className="lata4" alt="Lata Guaraná" />
                </div>
                <div className="cta-meio">
                    <h4>Quer experimentar?</h4>
                    <a href="#" className="btn btn-secondary">Aqui um CTA</a>

                </div>
                <div className="cta-direita">
                    <center><img src={lata5} className="lata5" alt="Lata Guaraná" /></center>
                </div>
            </div>
        </div>
    );
}

export default Cta;