import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  course="Full Stack Development";
  fontcolor="black";

  onButtonClick(){
    alert("Button Clicked");
  }

  onbuttondoubleclick(){
    alert("Button Double Clicked");
  }
  
  changeFontColor(color:string){
    this.fontcolor=color;
  }

}
