import logo from './logo.png';
import './Menu.css'

function Menu() {
    return (
      <nav>
        <div className="nav-esquerda">
        <img src={logo} width={134} height={51} alt="Logo" />
        </div>
        <div className="nav-direita">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram"></i>
        </div>
      </nav>
    );
  }

export default Menu;