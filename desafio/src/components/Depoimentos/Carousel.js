import Carousel from 'react-bootstrap/Carousel';
import img_path from './transparent.png'

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <img className="d-block w-100" src={img_path} alt="Primeiro slide" />
        <Carousel.Caption>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.”</p>
          <h3>@danielmaciel</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={img_path} alt="Segundo slide" />
        <Carousel.Caption>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.”</p>
          <h3>@danielmaciel</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={img_path} alt="Terceiro slide" />
        <Carousel.Caption>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.”</p>
          <h3>@danielmaciel</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;