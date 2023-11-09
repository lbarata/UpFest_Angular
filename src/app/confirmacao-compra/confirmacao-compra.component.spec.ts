import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoCompraComponent } from './confirmacao-compra.component';

describe('ConfirmacaoCompraComponent', () => {
  let component: ConfirmacaoCompraComponent;
  let fixture: ComponentFixture<ConfirmacaoCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacaoCompraComponent]
    });
    fixture = TestBed.createComponent(ConfirmacaoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
