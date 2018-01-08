import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouremailComponent } from './youremail.component';

describe('YouremailComponent', () => {
  let component: YouremailComponent;
  let fixture: ComponentFixture<YouremailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouremailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
