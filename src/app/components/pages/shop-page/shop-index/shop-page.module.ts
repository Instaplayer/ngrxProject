import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './shop-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { productReducer } from '../states/shop-page.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsService } from 'src/app/components/services/shop-page.services';
import { ProductsEffects } from '../states/shop-page-effects';

const routes: Routes = [
  {
    path: '',
    component: ShopPageComponent
  }
];

@NgModule({
  declarations: [ShopPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    MatInputModule,
    StoreModule.forFeature('product',{productReducer}),
    EffectsModule.forFeature([ProductsEffects])
  ],
  exports: [RouterModule]
})
export class ShopPageModule { }
