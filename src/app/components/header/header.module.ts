import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
