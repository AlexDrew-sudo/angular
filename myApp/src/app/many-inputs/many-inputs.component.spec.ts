import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyInputsComponent } from './many-inputs.component';

describe('ManyInputsComponent', () => {
  let component: ManyInputsComponent;
  let fixture: ComponentFixture<ManyInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManyInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
