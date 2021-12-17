import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', loadChildren: () => import('./components/pages/main-page/main-page.module').then(m => m.MainPageModule)},
  { path: 'login', loadChildren: () => import('./components/pages/login-page/login-index/login-page.module').then(m => m.LoginPageModule)},
  { path: 'shop', loadChildren: () => import('./components/pages/shop-page/shop-index/shop-page.module').then(m => m.ShopPageModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
