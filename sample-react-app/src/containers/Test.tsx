import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as productActions from "../store/actions/productActions";
import { IInitialState } from '../models/interfaces/IStates/IInitialState';
import IProduct from '../models/interfaces/dataModels/IProduct';
interface Props {
    products: IProduct[],
    getProducts: any
}
interface State {

}

export class Test extends Component<Props, State> {
    state = {}
    componentDidMount() {
        this.props.getProducts();
    }
    render() {
        const products = this.props.products.map(item => {
            return (
               <h6 key ={item.productID}> {item.productName}</h6>
            )
        })
        return (
            <div>
                {products}
            </div>
        )
    }
}

const mapStateToProps = (state: IInitialState) => ({
    products: state.productState.products
})

const mapDispatchToProps = {
    getProducts: productActions.getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
