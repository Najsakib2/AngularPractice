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
}
