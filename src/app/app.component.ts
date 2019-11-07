import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectState: boolean;
  stateInStorage: string;
  loadedFeature = 'recipe';

  ngOnInit() {
    this.stateInStorage = localStorage.getItem('state');

    if (this.stateInStorage === 'true') {
      this.projectState = this.stateInStorage.toLowerCase() === 'true' ? true : false;
    } else {
      this.projectState = false;
    }
  }

  changeState() {
    if (this.projectState === false) {
      this.projectState = true;
      this.storeState();
    } else {
      this.projectState = false;
      this.storeState();
    }
  }

  storeState() {
    localStorage.setItem('state', JSON.stringify(this.projectState));
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}


