import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  showSecret = false;
  placeholder = '...';
  log = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

}
