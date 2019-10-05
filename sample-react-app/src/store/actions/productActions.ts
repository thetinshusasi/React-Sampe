import * as types from "./actionTypes";
import { IActionType } from "../../models/interfaces/IActionType";
import IProduct from "../../models/interfaces/dataModels/IProduct";
import * as productService from "../../api/productService"

export const getProducts = (): any => {
    return (dispatch:any)=> {
        productService.getProducts().then(res =>{
            const data : IProduct [] = res.data;
            debugger
            dispatch(getProductsSuccess(data));
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const getProductsSuccess = (payload: IProduct[]): IActionType => {
    return {
        type: types.GET_PRODUCTS_SUCCESS,
        payload
    }
}
export const getProductsFailure = (): IActionType => {
    return {
        type: types.GET_PRODUCTS_FAILURE
    }
}