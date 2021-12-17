import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,} from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, mergeMap, Observable, of } from "rxjs";
import { ProductsService } from "src/app/components/services/shop-page.services";
import { ProductPropertiesData, ProductPropertiesPayload } from "../shop-index/shop-page.component";
import * as ProductActions from './shop-page.actions'

@Injectable()
export class ProductsEffects {

    constructor(private actions$: Actions, private productsService: ProductsService) {}

    postProducts$: Observable<Action> = createEffect(() => 
             this.actions$.pipe(
            ofType(ProductActions.productFormAdd),
            mergeMap((data) => this.productsService.postProducts(data.payload.obj).pipe(
                mergeMap(product => { 
                    return [
                    ProductActions.postProductsSuccess(new ProductPropertiesPayload(data.payload.obj))]})
            )),
            catchError(err => of(ProductActions.postProductsFail(err)))
        )
    )

    getProducts$: Observable<Action> = createEffect(() => 
             this.actions$.pipe(
            ofType(ProductActions.productTableLoad),
            mergeMap((data) => this.productsService.getProducts().pipe(
                mergeMap(product => {

                    return [
                    ProductActions.loadProductsSuccess(new ProductPropertiesData(product)
                    )]})
            )),
            catchError(err => of(ProductActions.postProductsFail(err)))
        )
    )
    
    delProducts$: Observable<Action> = createEffect(() => 
             this.actions$.pipe(
            ofType(ProductActions.productFormDel),
            mergeMap((data) => this.productsService.delProducts(data.payload.id).pipe(
                mergeMap(product => {
                    return [
                    ProductActions.deleteProductsSuccess(new ProductPropertiesData(product))]})
            )),
            catchError(err => of(ProductActions.postProductsFail(err)))
        )
    )

} 