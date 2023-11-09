import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bilhete-compra',
  templateUrl: './bilhete-compra.component.html',
  styleUrls: ['./bilhete-compra.component.scss']
})
export class BilheteCompraComponent {

  @Input() id!: number;
  @Input() designacao! : string;
  @Input() limite_vendas! : string;
  @Input() custo! : number;
  @Input() disponivel! : boolean;

constructor() {
}

}
