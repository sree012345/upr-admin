import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UPR';
  loggedin = localStorage.getItem('loggedinAdminUser');
  rememberMe = localStorage.getItem('rememberMe');

  exceptRouter: string[] = ['login'];

  constructor(private router: Router) {
    if (this.loggedin != null && this.rememberMe == 'true') {
      this.router.navigateByUrl('dashboard');
    } else {
      this.router.navigateByUrl('login');
    }
    // router.events.subscribe((event: any) => {
    //   window.scroll(0, 0);
    //   if (event instanceof NavigationStart) {
    //     if (
    //       this.loggedin === null &&
    //       !this.exceptRouter.some((m) => event.url.includes(m)) &&
    //       this.rememberMe == "false"
    //     ) {
    //       this.router.navigateByUrl("login");
    //     }
    //   }
    // });
  }
}
