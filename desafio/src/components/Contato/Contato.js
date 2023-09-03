import './Contato.css'
import Form from './Form';
import logo from './logo.png';


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
                    <Form />
                </div>

            </div>
            <div className="container-contato">
                    <div className="copy">
                        Todos os direitos reservados © 2020 Conecta
                    </div>
                    <div className="copy s">
                        Projetado por <img src={logo} width={134} height={51} alt="Logo" />
                    </div>
                </div>
        </div>
    );
}

export default Contato;