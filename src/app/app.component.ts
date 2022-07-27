import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './Service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'keepaliveProject';

  constructor(public authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['login']);
  }
}
