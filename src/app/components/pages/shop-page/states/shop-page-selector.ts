import { createFeatureSelector, createSelector } from "@ngrx/store";

const productArrayState = createFeatureSelector('product');

export const getProductArray = createSelector(productArrayState,
    (state: any) => {
        return state.productReducer.productArray
    })