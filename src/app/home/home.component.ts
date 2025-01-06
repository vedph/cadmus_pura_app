import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { AuthJwtService } from '@myrmidon/auth-jwt-login';

@Component({
  selector: 'cadmus-home',
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public logged: boolean;

  constructor(authService: AuthJwtService) {
    this.logged = authService.currentUserValue !== null;
  }
}
