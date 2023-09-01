import './Header.css'
import lata from'./lata-guarana1.png'

function Header() {
    return (
      <header>
        <div className="content">

        <header-esquerda>
        <h1>Aqui um título de duas linhas</h1>
        <button type="button" className="btn btn-primary btn-lg">Aqui um CTA</button>
        </header-esquerda>

        <header-direita>
        <img src={lata} alt="Lata Guaraná" />
        </header-direita>
        </div>
      </header>
    );
  }

export default Header;