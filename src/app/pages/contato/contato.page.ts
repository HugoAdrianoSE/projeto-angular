import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';

@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],

  imports: [
    CommonModule,
    MenuComponent,
    RouterLink,
    RouterModule,
  ],
})

export class ContatoPage implements OnInit {
  constructor() {}

  public async ngOnInit() {

  }
}
