import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  text:string='Today is Sunday';
  age:number=12;
  currency:number=12;
  birthday:number=20;
}
