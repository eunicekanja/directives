import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  numbers=[1,2,3,5,6];
  oddNumber=[1,2,3];
  evenNumbers=[2,4]
  onlyOdd=false;
}
