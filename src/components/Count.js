import retro from './assets/images/image-retro-pcs.jpg';
import laptop from './assets/images/image-top-laptops.jpg';
import game from './assets/images/image-gaming-growth.jpg';

function Count() {
    return(
        <div className="count">

    <div className="one count-child">
      <img className="count-img" src={retro} aria-hidden="true" alt="retro"/>
      <div>

        <h2>01</h2>

        <div>

          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>

        </div>
        
      </div>
    </div>

    <div className="two count-child">
      <img alt="laptop" className="count-img" src={laptop} aria-hidden="true"/>
      <div>

        <h2>02</h2>
        
        <div>
          
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets.</p>

        </div>
      </div>
    </div>

    <div className="three count-child">
      <img alt="game" className="count-img" src={game} aria-hidden="true"/>
      <div>

        <h2>03</h2>

        <div>

          <h3>The Growth of Gaming</h3>
          <p>How the pandemic has sparked fresh opportunities.</p>

        </div>
        

      </div>
    </div>

  </div>

    );
}
export default Count;