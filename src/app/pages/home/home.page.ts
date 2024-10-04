import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',

  imports: [
    CardComponent,
    CommonModule,
    MenuComponent,
    RouterLink,
    RouterModule,
  ],
})

export class HomePage implements OnInit {
  constructor() {}

  public async ngOnInit() {

  }
}
