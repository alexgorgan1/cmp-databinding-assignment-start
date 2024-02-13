import { Component, EventEmitter, Output, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnDestroy, OnInit {
  @Output() gameStarted = new EventEmitter<number>();
  count = 0;
  intervalId: any;

  ngOnInit(): void {
    
  }

  startTheGame() {
    this.intervalId = setInterval(() => {
      this.count++;
      this.gameStarted.emit(this.count);
    }, 1000);
  }

  stopTheGame() {
    clearInterval(this.intervalId);
  }

  ngOnDestroy() {
    this.startTheGame();
  }

}
