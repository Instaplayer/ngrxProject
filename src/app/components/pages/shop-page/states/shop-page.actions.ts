import { createAction, props } from "@ngrx/store";
import { ProductProperties, ProductPropertiesData, ProductPropertiesPayload } from "../shop-index/shop-page.component";

export const productFormAdd = createAction('[Form] Product add',function prepare(obj: ProductProperties){

    return {
        payload: {

            obj
        
        }
    }
})

export const productFormAdded = createAction('[Form] Product added',function prepare(obj: ProductProperties){

    return {
        payload: {

            obj
        
        }
    }
})

export const productFormDel = createAction('[Form] Product delete',function prepare(id: number){

    return {
        payload: {

            id
        
        }
    }
})

export const productTableLoad = createAction('[Form] product load')

export const postProductsSuccess = createAction('[Product API] Post Success', props<ProductPropertiesPayload>())
export const postProductsFail = createAction('[Product API] Post Failure', props<ProductPropertiesPayload>())

export const loadProductsSuccess = createAction('[Product API] Load Success', props<ProductPropertiesData>())
export const loadProductsFail = createAction('[Product API] Load Failure', props<ProductPropertiesData>())

export const deleteProductsSuccess = createAction('[Product API] Delete Success', props<ProductPropertiesData>())
export const deleteProductsFail = createAction('[Product API] Delete Failure', props<ProductPropertiesData>())