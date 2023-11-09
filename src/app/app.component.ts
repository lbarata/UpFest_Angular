import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {UserService} from "./services/user.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLogin: boolean = true;
  title: "UpFest - App" | undefined;

  constructor( private router: Router,
               private userService : UserService) {

    this.userService.loadLocalStorage();

    if (this.userService.dadosUser.length > 0) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
      this.router.navigate(['/login']);

    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/inicio') {
          this.isLogin = false;
        } else if (event.url === '/login') {
          this.isLogin = true;
        }
      }
    })
  }

  ngOnInit(): void {
  }
}
