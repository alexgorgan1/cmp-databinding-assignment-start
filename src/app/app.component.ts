import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentNumber: number | undefined;
  isOdd: boolean = false;

  onGameStarted(number: number) {
    this.currentNumber = number;
    this.isOdd = number % 2 !== 0;
  }
}
