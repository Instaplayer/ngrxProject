import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = "ngrxProject";

  links: any = [
    {content: 'main', fullName: 'Main Page'},
    {content: 'login', fullName: 'Login Page'},
    {content: 'shop', fullName: 'Store'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
