import { Component, Input } from '@angular/core';
import { StarRatingBarComponent } from '../star-rating-bar/star-rating-bar.component';

@Component({
  selector: 'app-review-card',
  imports: [StarRatingBarComponent],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent {
  @Input() reviewerName?: string = "Anónimo";
  @Input() serviceDescription?: string = "Sin Descripción del servicio";
  @Input() serviceReview: string = "";
  @Input() ratingScore: number = 0;

}
