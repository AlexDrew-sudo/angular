import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputTextBoxComponent } from './output-text-box.component';

describe('OutputTextBoxComponent', () => {
  let component: OutputTextBoxComponent;
  let fixture: ComponentFixture<OutputTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputTextBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
