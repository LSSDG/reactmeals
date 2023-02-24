import classes from './Header.module.css';
import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import imageMeals from '../../assets/meals.jpg'

const Header = (props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton>Cart</HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={imageMeals} alt ='A table full of meals'></img>
            </div>

        </Fragment>
    )
}

export default Header;