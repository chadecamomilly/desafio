import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Produtos from './components/Produtos/Produtos';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Cta from './components/Seção CTA/Cta';
import Contato from './components/Contato/Contato';

function Main() {
  return (
    <>
      <Menu />
      <Header />
      <Produtos />
      <Depoimentos />
      <Cta />
      <Contato />
    </> 
  );
}

export default Main;
