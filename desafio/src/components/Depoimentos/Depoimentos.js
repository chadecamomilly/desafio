import IndividualIntervalsExample from './Carousel.js';
import './Depoimentos.css'


function Depoimentos() {
    return (
      <div class="depo-container">
	<div class="depo-esquerda col1"></div>
	<div class="depo-direita-1 col2">
    <IndividualIntervalsExample />
    </div>
	<div class="depo-direita-2 col3"><p><strong>Peça para seu bar</strong></p></div>
      </div>
    );
  }

export default Depoimentos;