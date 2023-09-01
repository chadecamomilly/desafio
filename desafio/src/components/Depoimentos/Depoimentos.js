import IndividualIntervalsExample from './Carousel.js';
import './Depoimentos.css'


function Depoimentos() {
    return (
      <div className="depo-container">
	<div className="depo-esquerda col1"></div>
	<div className="depo-direita-1 col2">
    <IndividualIntervalsExample />
    </div>
	<div className="depo-direita-2 col3"><p><strong>Peça para seu bar</strong></p></div>
      </div>
    );
  }

export default Depoimentos;