import { Component, Input } from '@angular/core';
import { StarRatingBarComponent } from '../star-rating-bar/star-rating-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-card',
  imports: [StarRatingBarComponent, CommonModule],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss',
})
export class ReviewCardComponent {
  @Input() reviewerName?: string = 'Anónimo';
  @Input() serviceDescription?: string;
  @Input() serviceReview: string = '';
  @Input() companyName: string = '';
  @Input() ratingScore: number = 0;
}
