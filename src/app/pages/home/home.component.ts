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
  public slides = [
    {
      title: 'Primeiro Slide',
      subtitle: 'Este é o texto do primeiro slide',
      src: '../../../assets/img/angular-banner1.webp',
      active: true
    },
    {
      title: 'Segundo Slide',
      subtitle: 'Este é o texto do segundo slide',
      src: '../../../assets/img/angular-banner2.webp',
      active: false
    },
    {
      title: 'Terceiro Slide',
      subtitle: 'Este é o texto do terceiro slide',
      src: '../../../assets/img/angular-banner3.webp',
      active: false
    }
  ];

  constructor() { }

  public async ngOnInit() {

  }
}
