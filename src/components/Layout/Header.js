import classes from './Header.module.css';
import { Fragment } from 'react';

const Header = (props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img></img>
            </div>

        </Fragment>
    )
}

export default Header;