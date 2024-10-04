import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

  imports: [
    CommonModule,
    MenuComponent,
    RouterLink,
    RouterModule,
  ],
})

export class HomeComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      loop: true,
    });
  }

  public async ngOnInit() {

  }
}
