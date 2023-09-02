import './Produtos.css'
import produto1 from './produto1.png'
import produto2 from './produto2.png'

function Produtos() {
    return (
        <div className="container-produtos">
            <h2>Produtos</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris <br></br> semper, tortor sed vehicula.</p>
            <div class="container-cards">
                <div className="card">
                    <center><img src={produto1} className="card-img" width={200} alt="Garrafa 350ml"  /></center>
                    <div className="card-body">
                        <h4 className="card-title">Garrafa 350ml</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet</p>
                        <a href="#" className="btn btn-primary p">Aqui um CTA</a>
                    </div>
                </div>

                <div className="card">
                <center><img src={produto2} className="card-img" width={209} alt="Garrafa 100ml" /></center>
                    <div className="card-body">
                        <h4 className="card-title">Garrafa 100ml</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet</p>
                        <a href="#" className="btn btn-primary p">Aqui um CTA</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Produtos;