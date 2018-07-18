import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData'

class Checkout extends Component {

    //componentWillMount() {
        //HERE IS HOW TO PARSE THE INGREDIENTS FROM QUERY PARAMS 
        // const query = new URLSearchParams(this.props.location.search);
        // const ingredients = {};
        // let price = 0;
        // for (let param of query.entries()) {
        //     if (param[0] === 'price') {
        //         price = param[1];
        //     } else {
        //         ingredients[param[0]] = +param[1];
        //     };
        // }

        // this.setState( {ingredients: ingredients, totalPrice: price});
    // }
    
    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinuedHandler = () => {
        this.props.history.push('/checkout/contact-data' )
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <CheckoutSummary
                    checkoutContinued={this.checkoutContinuedHandler}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    // if ingredients were rendered from query params 
                    ingredients={this.props.ings}/>
                    {/* // ingredients={{...this.props.location.state}}/> */}
                <Route 
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
    }
};

export default  connect(mapStateToProps)(Checkout);