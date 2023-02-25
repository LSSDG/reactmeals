import { Fragment ,useState} from "react";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from "./components/Cart/Cart";
function App() {
  const [cartOn,setCartOn]=useState(false);

  const showCartHandler = ()=>{
    setCartOn(true);

  }
  const hideCartHandler = ()=>{
    setCartOn(false);
    
  }
  return (
    <Fragment>
      {cartOn && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
