import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardLinkComponent } from '../card-link/card-link.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CardLinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  siteTitle = 'SitePedyc';
}
