import './Contato.css'
import Form from './Form';

function Contato() {
    return (
        <div className="fundo-contato">
            <div className="container-contato">

                <div className="contato-esquerda">
                    <h5>Fale Conosco.</h5>
                    <div className="redes-sociais">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        │ REDES SOCIAIS
                    </div>
                </div>
                <div className="contato-direita">
                    <Form />oo
                </div>

            </div>
        </div>
    );
}

export default Contato;