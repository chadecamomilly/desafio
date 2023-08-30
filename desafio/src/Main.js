import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Produtos from './components/Produtos/Produtos';
import Depoimentos from './components/Depoimentos/Depoimentos';

function Main() {
  return (
    <>
      <Menu />
      <Header />
      <Produtos />
      <Depoimentos />
    </> 
  );
}

export default Main;
