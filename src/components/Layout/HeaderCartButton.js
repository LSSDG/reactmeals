import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import { useContext,useEffect,useState } from 'react';

const HeaderCartButton = (props)=>{
    const [btnPop,setBtnPop]=useState(false);
    const cartCtx = useContext(CartContext);

     const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
         return curNumber + item.amount;
     },0);
    //const [items] ={cartCtx};
    const btnClasses = `${classes.button} ${ btnPop ? classes.bump:''}` ;

    useEffect(()=>{
        if(cartCtx.items.length===0){
            return;
        }
        setBtnPop(true);
        const timer = setTimeout(()=>{
            setBtnPop(false);
        },300);
        return ()=>{
            clearTimeout(timer);
        };
    }, [cartCtx]);

    return( 
        <button className={btnClasses} onClick={props.onClick}>
            <span className= {classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>

        </button>
    )
}

export default HeaderCartButton;