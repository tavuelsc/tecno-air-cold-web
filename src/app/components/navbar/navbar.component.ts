import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit {
  menuOpen = false;
  isScrolled = false;
  activeSection: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  checkActiveSection() {
    const offset =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isScrolled = offset > 100;

    const sectionIds = [
      'inicio',
      'servicios',
      'proyectos',
      'resenas',
      'experiencia',
      'equipo',
      'contacto',
    ];
    for (let id of sectionIds) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 180 && rect.bottom >= 180) {
          this.activeSection = id;
          break;
        }
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkActiveSection();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (isPlatformBrowser(this.platformId)) this.checkActiveSection();
    }, 300);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
