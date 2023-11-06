import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilhetesComponent } from './bilhetes.component';

describe('BilhetesComponent', () => {
  let component: BilhetesComponent;
  let fixture: ComponentFixture<BilhetesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilhetesComponent]
    });
    fixture = TestBed.createComponent(BilhetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
