import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',

  imports: [
    CommonModule,
  ],
})

export class CardComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperContainer', { static: true }) swiperContainer!: ElementRef;

  ngAfterViewInit() {
    new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 'auto',
      spaceBetween: 15,
      loop: true,
    });
  }

  public async ngOnInit() {

  }
}
