import retro from './assets/images/image-retro-pcs.jpg';
import laptop from './assets/images/image-top-laptops.jpg';
import game from './assets/images/image-gaming-growth.jpg';
import CountChild from './countChild';

function Count() {
    return(
        <div className="count">

      <CountChild counting={{
        divClass: "one count-child",
        source: retro,
        name: "retro",
        head2:  "01",
        head3:  "Reviving Retro PCs",
        para: "What happens when old PCs are given modern upgrades?"
        }}/>
  
      <CountChild counting={{
        divClass: "two count-child",
        source: laptop,
        name: "laptop",
        head2:  "02",
        head3:  "Top 10 Laptops of 2022",
        para: "Our best picks for various needs and budgets."
        }}/>
    
      <CountChild counting={{
        divClass: "three count-child",
        source: game,
        name: "game",
        head2:  "03",
        head3:  "The Growth of Gaming",
        para: "How the pandemic has sparked fresh opportunities."
        }}/>
    

  </div>

    );
}
export default Count;