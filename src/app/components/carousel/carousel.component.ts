import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { ServiceCardComponent } from "../service-card/service-card.component";

@Component({
  selector: 'app-carousel',
  imports: [ServiceCardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CarouselComponent {
  @ViewChild('swiperContainer', { static: false }) swiperEl!: ElementRef;
  
  ngAfterViewInit() {
    setTimeout(() => {
      const swiperElement = this.swiperEl?.nativeElement;

      if (swiperElement?.initialize) {
        swiperElement.initialize();
      } else {
        console.error('Swiper no se ha registrado correctamente o initialize no está disponible.');
      }
    }, 0);
  }
}
