import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment41',
  templateUrl: './assignment41.component.html',
  styleUrls: ['./assignment41.component.css']
})
export class Assignment41Component implements OnInit {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

}
