import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './sections/home/home.component';
import { ServicesComponent } from './sections/services/services.component';
import { ReviewsComponent } from './sections/reviews/reviews.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { TeamComponent } from './sections/team/team.component';
import { ContactComponent } from './sections/contact/contact.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './sections/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    ProjectsComponent,
    ReviewsComponent,
    ExperienceComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tecno-air-cold-web';

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'logo-tecno-air',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/logos/logo-tecno-air-cold-logo.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'house',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/icons/icon-house.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'tools',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/icons/icon-tools.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'panel',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/icons/icon-panel.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'message-bubble',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/icons/icon-message-bubble.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'briefcase',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/icons/icon-briefcase.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'persons-with-star',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/icons/icon-persons-with-star.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'person-identification',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/icons/icon-person-identification.svg'
      )
    );
  }
}
