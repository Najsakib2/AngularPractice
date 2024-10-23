import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = 'AngularPractice';
  muButton: string = 'sakib'

  isDisable: boolean = true;
  angularImage:string = '../assets/angular.png';
  hello : string = 'sakib';
  hello2: string = 'sakib2';
}
