import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home-background-carousel',
  imports: [],
  templateUrl: './home-background-carousel.component.html',
  styleUrl: './home-background-carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeBackgroundCarouselComponent {
  @ViewChild('swiperContainer', { static: false }) swiperEl!: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => {
      const swiperElement = this.swiperEl?.nativeElement;

      if (swiperElement?.initialize) {
        swiperElement.initialize();
      } else {
        console.error(
          'Swiper en Inicio no se ha registrado correctamente o initialize no está disponible.'
        );
      }
    }, 0);
  }
}
