import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gate1Component } from './gate1.component';

describe('Gate1Component', () => {
  let component: Gate1Component;
  let fixture: ComponentFixture<Gate1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gate1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
