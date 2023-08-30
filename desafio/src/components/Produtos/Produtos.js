import './Produtos.css'
import produto1 from './produto1.png'
import produto2 from './produto2.png'

function Produtos() {
    return (
        <div class="container-produtos">
            <h2>Produtos</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper, tortor sed vehicula.</p>
            <div class="container-cards">
                <div class="card">
                    <img src={produto1} class="card-img-top" width={209} alt="..."  />
                    <div class="card-body">
                        <h5 class="card-title">Garrafa 350ml</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet</p>
                        <a href="#" class="btn btn-primary p">Aqui um CTA</a>
                    </div>
                </div>

                <div class="card">
                    <img src={produto2} class="card-img-top" width={209} alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Garrafa 100ml</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet</p>
                        <a href="#" class="btn btn-primary p">Aqui um CTA</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Produtos;