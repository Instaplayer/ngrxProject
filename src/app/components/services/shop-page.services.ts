import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductProperties } from "../pages/shop-page/shop-index/shop-page.component";


@Injectable({providedIn: 'root'})
export class ProductsService {
    constructor (private http: HttpClient) {}

    getProducts(): Observable<any> {

        return this.http.get('https://localhost:44309/ngrx')

    }

    postProducts(payload: ProductProperties): Observable<any> {
        return this.http.post('https://localhost:44309/ngrx',
        {id: payload.id, name:payload.name, price: payload.price, count: payload.count})
    }

    delProducts(index: number): Observable<any> {
        return this.http.delete('https://localhost:44309/ngrx?index=' + index)
    }
}