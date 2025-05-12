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
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  private swiperInstance: any;

  ngAfterViewInit(): void {
    setTimeout(() => {
      const swiperEl = this.swiperContainer.nativeElement as any;
      if(!swiperEl || swiperEl.swiper || typeof swiperEl.initialize !== 'function') return;
      swiperEl.initialize();
      this.swiperInstance = swiperEl.swiper;
    }, 50);
  }

  ngOnDestroy(): void {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
    }
  }
}
