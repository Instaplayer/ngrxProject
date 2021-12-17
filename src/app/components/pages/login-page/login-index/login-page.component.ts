import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { formSave } from '../state/login-page.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})


export class LoginPageComponent implements OnInit {

  userInfo = {

    name: "",
    password: "",
    remember: false

  }

  formDataSubscription: any

  constructor(private store: Store<any>) { }

  ngOnInit(): void {

    this.formDataSubscription = this.store.select('login').subscribe(
      login => {
        if (login) {
          this.userInfo.remember = login.loginReducer.remember;
          this.userInfo.name = login.loginReducer.name;
          this.userInfo.password = login.loginReducer.password;
        }
    });
  }

  ngOnDestroy(): void {

    this.formDataSubscription.unsubscribe()

  }

  changed(): void {
    this.store.dispatch(formSave(this.userInfo.name,this.userInfo.password,this.userInfo.remember));
  }

}
