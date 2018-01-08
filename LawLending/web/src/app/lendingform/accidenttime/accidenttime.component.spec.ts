import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidenttimeComponent } from './accidenttime.component';

describe('AccidenttimeComponent', () => {
  let component: AccidenttimeComponent;
  let fixture: ComponentFixture<AccidenttimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidenttimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidenttimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
