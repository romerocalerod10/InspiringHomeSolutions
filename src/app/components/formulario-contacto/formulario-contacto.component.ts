import { Component } from '@angular/core';
import {EmailService} from "../../servicios/email.service";
import {ToastrService} from "ngx-toastr";
import {MailRequest} from "../../servicios/MailRequest";

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {

  tipoProductoSeleccionado = 'NINGUNO';
  constructor(private emailService: EmailService,
              private toastr: ToastrService) {
  }

  submitForm(formulario: any) {
    // Accede a los valores del formulario utilizando el objeto ngForm
    const values = formulario.value;
    const mailRequest = new MailRequest();
    mailRequest.from = values.email;
    mailRequest.subject = 'Contacto sobre producto: ' + this.tipoProductoSeleccionado;
    mailRequest.body = 'El cliente ' + values.nombre + ' solicita información sobre el producto ' + this.tipoProductoSeleccionado +
      '.\nCorreo electrónico: ' + values.email +
      '.\nTeléfono: ' + values.telefono +
      '.\nProvincia: ' + values.provincia +
      '.\nPoblación: ' + values.poblacion +
      '.\nMensaje: ' + values.comentarios;

    this.emailService.enviarCorreo(mailRequest).subscribe(
      response => {
        this.toastr.success('Correo enviado correctamente', '¡Gracias por contactar con nosotros!');
        formulario.reset();
        this.tipoProductoSeleccionado = 'NINGUNO';
      },
      error => {
        console.error('Error al enviar el correo', error);
        this.toastr.error('El correo no se ha podido enviar.', 'Error');
      }
    );
  }

}
