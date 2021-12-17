import { createReducer, on} from "@ngrx/store";
import { productFormDel, postProductsSuccess, loadProductsSuccess } from "./shop-page.actions";

var lastSavedID = 0

export const productReducer = createReducer(
    {productArray: [] as any[]},
    on(postProductsSuccess, (state,action) => {

        let fullArr = [...state.productArray]

        let arrayLength = fullArr.length - 1
        console.log(arrayLength)
        let lastElement = [...fullArr][arrayLength]
        if(lastElement != undefined)
        {
            lastSavedID = lastElement.id + 1;
        }
        else
        {
            lastSavedID = 1
        }

            let tempArr = {

            id: lastSavedID,
            name: action.productProperties.name,
            price: action.productProperties.price,
            count: action.productProperties.count

        }

        fullArr.push(tempArr)

            return {
                ...state,
                productArray: [...fullArr]
            }
    }),
    on(productFormDel, (state,action) => {

        let fullArr = [...state.productArray]

        fullArr.splice(action.payload.id, 1)

        return {
            ...state,
            productArray: [...fullArr]
        }

    }),
    on(loadProductsSuccess, (state,action) => {
        return {
            ...state,
            productArray: [...action.productProperties]
        };
    }),
)