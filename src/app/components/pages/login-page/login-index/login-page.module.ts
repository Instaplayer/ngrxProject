import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { loginReducer } from '../state/login-page.reducer';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  }
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    StoreModule.forFeature('login',{loginReducer})
  ],
  exports: [RouterModule]
})
export class LoginPageModule { }
