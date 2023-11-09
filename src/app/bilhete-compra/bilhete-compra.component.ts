import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmacaoCompraComponent} from "../confirmacao-compra/confirmacao-compra.component";

@Component({
  selector: 'app-bilhete-compra',
  templateUrl: './bilhete-compra.component.html',
  styleUrls: ['./bilhete-compra.component.scss']
})
export class BilheteCompraComponent {

  @Input() id!: number;
  @Input() designacao? : string;
  @Input() limite_vendas! : string;
  @Input() custo! : number;
  @Input() disponivel! : boolean;

  @Input() nomeFestival! : string;
  @Input() idFestival! : number;

constructor(private window : MatDialog) {
}

openPopup(){
  const windowRef = this.window.open(ConfirmacaoCompraComponent, {
    width: '400px' ,
  })

  windowRef.componentInstance.id = this.id;
  windowRef.componentInstance.designacao = this.designacao;
  windowRef.componentInstance.limite_vendas = this.limite_vendas;
  windowRef.componentInstance.custo = this.custo;
  windowRef.componentInstance.disponivel = this.disponivel;
  windowRef.componentInstance.nomeFestival = this.nomeFestival;
  windowRef.componentInstance.idFestival = this.idFestival;

}
}
