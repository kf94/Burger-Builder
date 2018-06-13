import React from 'react';
import classes from './Order.css'

const order = (props) => {
    return (
        <div className={classes.Order} onClick={props.clicked}>
            <p>{props.ingredients}</p>
            <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)} USD</strong></p>
        </div>
    )
}

export default order;