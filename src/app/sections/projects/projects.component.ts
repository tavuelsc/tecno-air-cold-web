import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { projectsData } from '../../data/projects.data';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  host: {
    ngSkipHydration: '',
  },
})
export class ProjectsComponent {
  @ViewChild('projectsSwiperContainer', { static: false })
  swiperRef!: ElementRef;
  projects = projectsData;

  isBeginning = true;
  isEnd = false;

  ngAfterViewInit() {
    const swiperEl = this.swiperRef.nativeElement;
    swiperEl.addEventListener('swiperslidechange', (event: any) => {
      const targetId = event.target.id;
      if (targetId !== 'projectsSwiperContainer') return;
      this.updateButtonStates();
    });
  }

  updateButtonStates() {
    const swiperInstance = this.swiperRef.nativeElement.swiper;
    if (!swiperInstance) return;

    this.isBeginning = swiperInstance.isBeginning;
    this.isEnd = swiperInstance.isEnd;
  }

  slidePrev() {
    this.swiperRef.nativeElement?.swiper.slidePrev();
  }

  slideNext() {
    this.swiperRef.nativeElement?.swiper.slideNext();
  }
}
