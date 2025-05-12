import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
})
export class ServiceCardComponent {
  @Input() imgUrl: string = ''; 
  @Input() cardTitle: string = ''; 
  @Input() cardDescription: string = '';
}