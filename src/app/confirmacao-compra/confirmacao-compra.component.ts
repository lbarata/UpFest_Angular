import {Component, Input} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../services/user.service";


@Component({
  selector: 'app-confirmacao-compra',
  templateUrl: './confirmacao-compra.component.html',
  styleUrls: ['./confirmacao-compra.component.scss']
})
export class ConfirmacaoCompraComponent {

  @Input() id!: number;
  @Input() designacao! : string | undefined;
  @Input() limite_vendas! : string;
  @Input() custo! : number;
  @Input() disponivel! : boolean;

  @Input() nomeFestival! : string;
  @Input() idFestival! : number;

  nome! : string;
  email! : string;

  constructor(public windowRef : MatDialogRef<ConfirmacaoCompraComponent>,
              public userService : UserService) {

    this.nome = userService.getNome();
    this.email = userService.getEmail();

  }

  closePopup() {
    this.windowRef.close();
  }

  comfirmarComprar() {
    this.userService.comprarBilhete(this.idFestival, this.id).subscribe(
        (dados) => {
          const bilhete = dados.bilhete;
          const pagamento = dados.pagamento;

        },
    (erro) => {

    }
    )
    this.closePopup();
  }



  gerarBilhete() {

  }

  gerarPagamento() {

  }


}
