import { Component } from '@angular/core';
import {faHouseChimney, faMagnifyingGlass, faTicket, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  protected readonly home = faHouseChimney;
  protected readonly search = faMagnifyingGlass;
  protected readonly ticket = faTicket;
  protected readonly user = faUser;


}
