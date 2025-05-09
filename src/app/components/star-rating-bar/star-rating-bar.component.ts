import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating-bar',
  imports: [CommonModule],
  templateUrl: './star-rating-bar.component.html',
  styleUrl: './star-rating-bar.component.scss'
})
export class StarRatingBarComponent {
  @Input() rating: number = 0;
}
