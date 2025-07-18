import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HomeBackgroundCarouselComponent } from '../../components/home-background-carousel/home-background-carousel.component';

@Component({
  selector: 'app-home',
  imports: [HomeBackgroundCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  onButtonPressed() {
    const numero = environment.technoAirColdWhatsAppNumber;
    let mensaje = `Hola. Quisiera Cotizar.
– Mensaje generado y enviado desde el formulario web de TECNOAIRCOLD`;

    const mensajeCodificado = encodeURIComponent(mensaje);

    const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
    const urlWhatsApp = isMobile
      ? `https://wa.me/${numero}?text=${mensajeCodificado}`
      : `https://web.whatsapp.com/send?phone=${numero}&text=${mensajeCodificado}`;

    window.open(urlWhatsApp, '_blank');
  }
}
