// Product Component
import one from "../image/one.jpg";
import two from "../image/two.jpg";
import three from "../image/three.jpg";

function Product(){
    return(
      <div className="products">
        <div className="box">
        <img src={one} alt="img"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
          <button id="btn">read more</button> 
        </div>
        <div className="box">
        <img src={two} alt="img"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
          <button>read more</button>  
        </div>
        <div className="box">
        <img src={three} alt="img"></img>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
          <button>read more</button> 
        </div>
      </div>
    )
  }
export default Product  