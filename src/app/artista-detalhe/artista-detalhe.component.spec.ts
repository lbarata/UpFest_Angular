import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaDetalheComponent } from './artista-detalhe.component';

describe('ArtistaDetalheComponent', () => {
  let component: ArtistaDetalheComponent;
  let fixture: ComponentFixture<ArtistaDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistaDetalheComponent]
    });
    fixture = TestBed.createComponent(ArtistaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
