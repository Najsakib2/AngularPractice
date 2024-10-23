import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = 'AngularPractice';
  muButton: string = 'sakib'

  isDisable: boolean = true;
  angularImage: string = '../assets/angular.png';

  bgcolor: string = 'blue';
  titleColor: string = 'white';
  description: string = 'font-size: 30px; lightblue';
  value: string = "";
}
