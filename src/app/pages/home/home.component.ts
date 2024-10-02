import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

  imports: [
    RouterLink,
    RouterModule,
    MenuComponent,
  ],
})

export class HomeComponent implements OnInit {
  constructor() { }

  public async ngOnInit() {

  }
}
