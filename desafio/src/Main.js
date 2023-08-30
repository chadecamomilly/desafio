import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Produtos from './components/Produtos/Produtos';

function Main() {
  return (
    <>
      <Menu />
      <Header />
      <Produtos />
    </> 
  );
}

export default Main;
