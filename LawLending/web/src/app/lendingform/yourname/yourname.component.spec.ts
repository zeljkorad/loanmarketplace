import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YournameComponent } from './yourname.component';

describe('YournameComponent', () => {
  let component: YournameComponent;
  let fixture: ComponentFixture<YournameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YournameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YournameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
