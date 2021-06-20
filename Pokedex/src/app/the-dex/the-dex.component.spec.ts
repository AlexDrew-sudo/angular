import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDexComponent } from './the-dex.component';

describe('TheDexComponent', () => {
  let component: TheDexComponent;
  let fixture: ComponentFixture<TheDexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheDexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheDexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
