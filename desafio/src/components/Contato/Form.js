import './Contato.css'
import { Row, Col } from "react-bootstrap";

function Form() {
    return (
        <Col lg='12' className="d-flex align-items-center">
            <form className="contact__form w-100">
                <Row>
                    <Col lg='12' className="form-group">
                        <label for="nome">Nome</label>
                        <input
                            className="form-control rounded-0"
                            id="nome"
                            name="nome"
                            placeholder="Seu nome..."
                            type="text"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col lg='6' className="form-group">
                        <label for="nome">Telefone</label>
                        <input
                            className="form-control rounded-0"
                            id="tel"
                            name="tel"
                            placeholder="(21) 00000-0000"
                            type="tel"
                        />
                    </Col>

                    <Col lg='6' className="form-group">
                        <label for="email">E-mail</label>
                        <input
                            className="form-control rounded-0"
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            type="email"
                        />
                    </Col>

                </Row>
                <label for="sel">Assunto</label>
                <select
                    className="form-control rounded-0"
                    id="sel"
                    name="sel"
                >
                    <option value="volvo">Selecione uma opção...</option>
                    <option value="um">Chamar a Camilly para a entrevista!</option>
                    <option value="dois">...</option>
                    <option value="tres">...</option>
                </select>
                <label for="mensagem">Mensagem</label>
                <textarea
                    className="form-control rounded-0"
                    id="message"
                    name="mensagem"
                    placeholder="Mensagem"
                    rows='4'
                ></textarea>
                <br />
                <Row>
                    <Col lg='6' className="form-group">
                        <button className="btn btn-primary btn-lg" type="submit">Enviar</button>
                    </Col>
                </Row>
            </form>
        </Col>

    );
}

export default Form;