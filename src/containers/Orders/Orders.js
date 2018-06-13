import React, { Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler' 

class Orders extends Component {
    state ={
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders =[];
                for (let j in res.data) {
                    fetchedOrders.push({...res.data[j],
                                    id: j});
                }
                this.setState({loading: false,
                                orders: fetchedOrders})
                                console.log(this.state);
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    orderViewHandler = () => {

    }


    render() {
        let orders = null;
        if (this.state.orders.length > 0) {
            orders = (
                this.state.orders.map((cur, i) => {
                    console.log(cur);
                    console.log(cur.ingredients);
                    const ings = [];
                    for (let key in cur.ingredients) {
                        if (cur.ingredients[key] > 0){
                ings.push(<span style={{
                                textTransform: 'capitalized',
                                display: 'inline-block',
                                margin: '0 8px',
                                border: '1px solid #ccc',
                                padding: '5px'
                            }} key={key + cur.id}>{key}  ({cur.ingredients[key]}) </span>);
                        }
                    }
                    return <Order ingredients={ings} key={cur.id} price={cur.price} clicked={this.orderViewHandler} />
                })
            )
        }
        return (
            <div>
                {orders}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);