import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectCardComponent {
  @Input() imageSrcs: string[] = [];
  @Input() titleH4: string = 'Texto sin Definir...';
  @Input() titleH2: string = 'Texto sin Definir...';
  @Input() description: string = 'Texto sin Definir...';

  @Input() isExpanded = false;

  setExpanded(value: boolean) {
    this.isExpanded = value;
  }

  handleProjectCardClick(): void {
    this.isExpanded = !this.isExpanded;
  }
}
