import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselModule } from '@coreui/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

  imports: [
    CarouselModule,
    CommonModule,
    RouterOutlet,
  ],
})

export class AppComponent {
  title = 'projeto-angular';
}
