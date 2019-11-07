import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment41Component } from './assignment41.component';

describe('Assignment41Component', () => {
  let component: Assignment41Component;
  let fixture: ComponentFixture<Assignment41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
