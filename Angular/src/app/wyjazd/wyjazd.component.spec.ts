import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyjazdComponent } from './wyjazd.component';

describe('WyjazdComponent', () => {
  let component: WyjazdComponent;
  let fixture: ComponentFixture<WyjazdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WyjazdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WyjazdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
