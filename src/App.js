//nav bar 
import Navbar from "./components/navbar.js";

// search bar
import Searchbar from "./components/searchbar";

//product 
import Product from "./components/product";

//about us
import Aboutus from "./components/aboutus";

//footer
import Footer from "./components/footer";


function App(){
    return(
        <div>
          <Navbar />
          <Searchbar />
          <Product />
          <Aboutus />
          <Footer />
        </div>
    )
}
export default App