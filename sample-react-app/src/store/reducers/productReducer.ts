import initialState from "./initialState";
import * as types from "../actions/actionTypes";
import { IProductState } from "../../models/interfaces/IStates/IProductState";
import { IActionType } from "../../models/interfaces/IActionType";

const productReducer = (state: IProductState = initialState.productState, action: IActionType): IProductState => {
    switch (action.type) {
        case types.GET_PRODUCTS_SUCCESS:
            const products = action.payload;
            return {
                ...state,
                products
            }
        default:
            return state
    }
}
export default productReducer; 