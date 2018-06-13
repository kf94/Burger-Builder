import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
    console.log(props.disabled);
    return (
    <div className={classes.BuildControls}>
    <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl) => {
            let disable = (props.disabled[ctrl.type]);
            return (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                ifDisabled={disable}/>
        )})}
        <button onClick={props.displayModal} className={classes.OrderButton} disabled={!props.purchasable} >ORDER NOW</button>
    </div>
)};

export default buildControls;