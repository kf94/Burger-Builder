import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    //     return [...Array(props.ingredients[igKey])].map((_, i) => {
    //         return <BurgerIngredient key={igKey + i} type = {igKey}/>;
    //     });
    // });

let transformedIngredients = [];
Object.keys(props.ingredients).forEach((cur) => {
    for (let i=0; i< props.ingredients[cur]; i++) {
        transformedIngredients.push(<BurgerIngredient key={cur + i} type = {cur}/>)
    }
});

if (transformedIngredients.length === 0) {
transformedIngredients = <p>Please start adding ingredients!</p>;
}

console.log(props.ingredients);
console.log(transformedIngredients);

if (transformedIngredients.length < 1) {
    transformedIngredients = <p>"PLEASE ADD SOME INGREDIENTS!!!"</p>;
}

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;