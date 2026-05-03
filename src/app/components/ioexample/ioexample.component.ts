import { Component } from '@angular/core';
import { ParentComponent } from "../parent/parent.component";

@Component({
  selector: 'app-ioexample',
  imports: [ParentComponent],
  templateUrl: './ioexample.component.html',
  styleUrl: './ioexample.component.css'
})
export class IoexampleComponent {

}
