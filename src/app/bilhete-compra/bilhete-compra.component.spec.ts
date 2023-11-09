import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilheteCompraComponent } from './bilhete-compra.component';

describe('BilheteCompraComponent', () => {
  let component: BilheteCompraComponent;
  let fixture: ComponentFixture<BilheteCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilheteCompraComponent]
    });
    fixture = TestBed.createComponent(BilheteCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
