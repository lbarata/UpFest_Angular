import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-confirmacao-compra',
  templateUrl: './confirmacao-compra.component.html',
  styleUrls: ['./confirmacao-compra.component.scss']
})
export class ConfirmacaoCompraComponent {

  @Input() id!: number;
  @Input() designacao! : string;
  @Input() limite_vendas! : string;
  @Input() custo! : number;
  @Input() disponivel! : boolean;





}
