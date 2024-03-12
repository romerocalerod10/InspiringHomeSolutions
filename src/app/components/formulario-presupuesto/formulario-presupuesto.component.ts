import {Component, OnInit} from '@angular/core';
import {EmailService} from "../../servicios/email.service";
import {MailRequest} from "../../servicios/MailRequest";
import {ToastrService} from "ngx-toastr";
import {TipoSolucion} from "../../pages/soluciones/TipoSolucion";

@Component({
  selector: 'app-formulario-presupuesto',
  templateUrl: './formulario-presupuesto.component.html',
  styleUrls: ['./formulario-presupuesto.component.css']
})
export class FormularioPresupuestoComponent {

  tipoProductoSeleccionado = 'NINGUNO';
  entornoInstalacionSeleccionado = 'NINGUNO';
  numeroPisosSeleccionado = 'NINGUNO';
  plazoInstalacionSeleccionado = 'NINGUNO';

  constructor(private emailService: EmailService,
              private toastr: ToastrService) {
  }

  submitForm(formulario: any) {
    // Accede a los valores del formulario utilizando el objeto ngForm
    const values = formulario.value;
    const mailRequest = new MailRequest();
    mailRequest.from = values.email;
    mailRequest.subject = 'Información presupuesto: ' + this.tipoProductoSeleccionado;
    mailRequest.body = 'El cliente ' + values.nombre + ' solicita información sobre el producto ' + this.tipoProductoSeleccionado +
      '.\nCorreo electrónico: ' + values.email +
      '.\nTeléfono: ' + values.telefono +
      '.\nProvincia: ' + values.provincia +
      '.\nPoblación: ' + values.poblacion +
      '.\nEntorno de instalación: ' + this.entornoInstalacionSeleccionado +
      '.\nNúmero de pisos: ' + this.numeroPisosSeleccionado +
      '.\nPlazo de instalación: ' + this.plazoInstalacionSeleccionado +
      '.\nMensaje: ' + values.comentarios;

    this.emailService.enviarCorreo(mailRequest).subscribe(
      response => {
        this.toastr.success('Correo enviado correctamente', '¡Gracias por contactar con nosotros!');
        formulario.reset();
        this.tipoProductoSeleccionado = 'NINGUNO';
        this.entornoInstalacionSeleccionado = 'NINGUNO';
        this.numeroPisosSeleccionado = 'NINGUNO';
        this.plazoInstalacionSeleccionado = 'NINGUNO';
      },
      error => {
        console.error('Error al enviar el correo', error);
        this.toastr.error('El correo no se ha podido enviar.', 'Error');
      }
    );
  }

}
