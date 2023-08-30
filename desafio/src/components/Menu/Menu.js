import logo from './logo.png';
import './Menu.css'

function Menu() {
    return (
      <nav>
        <left>
        <img src={logo} width={134} height={51} alt="Logo" />
        </left>
        <right>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram"></i>
        </right>
      </nav>
    );
  }

export default Menu;