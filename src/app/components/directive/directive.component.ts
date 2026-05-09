import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

  classList: string[]=[];
  theme: boolean = false;
  loggedIn: boolean = false;
  students = ["Shubh","Prathamesh","Nishita"];
  products = [
    {id:101, name: "Laptop", price: 50000, outofstock: false},
    {id:102, name: "Mobile", price: 20000, outofstock: true},
    {id:103, name: "Tablet", price: 30000, outofstock: false},
    {id:104, name: "Headphones", price: 5000, outofstock: false},
    {id:105, name: "Speaker", price: 10000, outofstock: false},
    {id:106, name: "Monitor", price: 15000, outofstock: true},
  ];

  addClass(className:string){
    this.classList.push(className);
  }

  removeLastClass(){
    this.classList.pop();
  }

  changeTheme(){
    this.theme = !this.theme;
  }

  changeLogin(){
    this.loggedIn = !this.loggedIn;
  }
}
