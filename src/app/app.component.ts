import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'autocar';

  constructor(private router: Router) {

  }
  year = new Date().getFullYear();
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  goToContato() {
    this.router.navigate(['contato']);
  }

  goToSobre() {
    this.router.navigate(['sobre']);
  }
}
