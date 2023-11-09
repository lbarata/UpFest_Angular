import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoValidadoComponent } from './pagamento-validado.component';

describe('PagamentoValidadoComponent', () => {
  let component: PagamentoValidadoComponent;
  let fixture: ComponentFixture<PagamentoValidadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagamentoValidadoComponent]
    });
    fixture = TestBed.createComponent(PagamentoValidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
