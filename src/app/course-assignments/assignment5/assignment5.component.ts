import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css']
})
export class Assignment5Component implements OnInit {
  oddNumbers = [1, 3, 5, 7, 9];
  evenNumbers = [0, 2, 4, 6, 8];
  onlyOdd = false;
  value = 10;

  constructor() {}

  ngOnInit() {}
}
