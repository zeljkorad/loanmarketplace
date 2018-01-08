/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LendingformComponent } from './lendingform.component';

describe('LendingformComponent', () => {
  let component: LendingformComponent;
  let fixture: ComponentFixture<LendingformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
