import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { CarouselModule } from '@coreui/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

  imports: [
    CarouselModule,
    CommonModule,
    MenuComponent,
    RouterLink,
    RouterModule,
  ],
})

export class HomeComponent implements OnInit {

  constructor() { }

  public async ngOnInit() {

  }
}
