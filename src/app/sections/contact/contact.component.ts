import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  handleFormSubmit() {
    const numero = environment.technoAirColdWhatsAppNumber;

    let mensaje = '';

    if (this.mensaje && this.mensaje.trim() !== '') {
      mensaje = `${this.mensaje}
Atentamente: ${this.nombre}
Correo: ${this.correo}.
– Enviado desde el formulario web de TECNOAIRCOLD`;
    } else {
      mensaje = `Hola, mi nombre es ${this.nombre}. Mi correo es ${this.correo}. Quisiera recibir información o atención personalizada.
Gracias por su atención, quedo atento(a).
– Enviado desde el formulario web de TECNOAIRCOLD`;
    }

    const mensajeCodificado = encodeURIComponent(mensaje);

    const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
    const urlWhatsApp = isMobile
      ? `https://wa.me/${numero}?text=${mensajeCodificado}`
      : `https://web.whatsapp.com/send?phone=${numero}&text=${mensajeCodificado}`;

    window.open(urlWhatsApp, '_blank');
  }

}
