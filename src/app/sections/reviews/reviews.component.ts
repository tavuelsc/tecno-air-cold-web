import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ReviewCardComponent } from '../../components/review-card/review-card.component';

@Component({
  selector: 'app-reviews',
  imports: [ReviewCardComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReviewsComponent implements AfterViewInit {
  @ViewChild('swiperEl', { static: false }) swiperEl!: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => {
      const swiperElement = this.swiperEl?.nativeElement;

      if (swiperElement?.initialize) {
        swiperElement.initialize();
      } else {
        console.error(
          'Swiper en Reseñas no se ha registrado correctamente o initialize no está disponible.'
        );
      }
    }, 0);
  }
}
