import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { productFormDel, productFormAdd, productTableLoad } from '../states/shop-page.actions';
import { ProductsService } from 'src/app/components/services/shop-page.services';
import { getProductArray } from '../states/shop-page-selector'

export interface ProductProperties{

  id: number,
  name: string,
  price: number,
  count: number

}



export class ProductPropertiesPayload {
  productProperties: ProductProperties;
  constructor(productProperties: ProductProperties) {
    this.productProperties = productProperties;
  }
}

export class ProductPropertiesData {
  productProperties: ProductProperties[];
  constructor(productProperties: ProductProperties[]) {
    this.productProperties = productProperties;
  }
}

let ProductData: ProductProperties[] = [

  {id: 1, name:'Paczka parówek', price: 20, count: 3},
  {id: 2, name:'Misie Haribo', price: 39, count: 1},

]

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  productInfo: ProductProperties = {

    id: 0,
    name: "",
    price: 0,
    count: 0
  
  }

  @ViewChild(MatTable)
  table!: MatTable<ProductProperties>;

  displayedColumns: string[] = ['id', 'name', 'price', 'count','trash'];
  dataSource = ProductData;

  panelOpenState = false

  formDataSubscription: any

  constructor(private store: Store<any>, private grabProducts: ProductsService) { }     

  delProduct(id: number): void {

    let index = this.dataSource.findIndex(i => i.id === id)
    this.store.dispatch(productFormDel(index));
    this.table.renderRows();
  }

  ngOnInit(): void {

    this.store.dispatch(productTableLoad())

    this.formDataSubscription = this.store.select(getProductArray).subscribe(
      product => {
        if (product) {
          this.dataSource = product
        }
    });

  }

  submitted(): void {
    this.store.dispatch(productFormAdd(this.productInfo));
    this.table.renderRows();
  }

}
