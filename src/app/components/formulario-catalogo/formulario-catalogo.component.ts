import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TipoSolucion} from "../../pages/soluciones/TipoSolucion";
import {FileService} from "../../servicios/file.service";
import {EmailService} from "../../servicios/email.service";
import {MailRequest} from "../../servicios/MailRequest";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-formulario-catalogo',
  templateUrl: './formulario-catalogo.component.html',
  styleUrls: ['./formulario-catalogo.component.css']
})
export class FormularioCatalogoComponent implements OnInit {

  tipoSolucionSeleccionado: any;
  nombreCatalogo: string = '';

  constructor(public dialogRef: MatDialogRef<FormularioCatalogoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fileService: FileService,
              private emailService: EmailService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.tipoSolucionSeleccionado = this.data.tipoSolucion;
    switch (this.tipoSolucionSeleccionado) {
      case TipoSolucion.SILLA_SALVAESCALERAS_FLOW_X:
        this.nombreCatalogo = 'Silla Salvaeescaleras Flow X';
        break;
      case TipoSolucion.SILLA_SALVAESCALERAS_CURVA_DOBLE_RAIL:
        this.nombreCatalogo = 'Silla Salvaeescaleras Curva Doble Rail';
        break;
      case TipoSolucion.SILLA_SALVAESCALERAS_HOMEGLIDE:
        this.nombreCatalogo = 'Silla Salvaeescaleras Homeglide';
        break;
      case TipoSolucion.SILLA_SALVAESCALERAS_HOMEGLIDE_EXTERIOR:
        this.nombreCatalogo = 'Silla Salvaeescaleras Homeglide Exterior';
        break;
      case TipoSolucion.SILLA_SALVAESCALERAS_SMART_AIR_CURVA:
        this.nombreCatalogo = 'Silla Salvaeescaleras Smart Air Curva';
        break;
      case TipoSolucion.SILLA_SALVAESCALERAS_SMART_AIR_RECTA:
        this.nombreCatalogo = 'Silla Salvaeescaleras Smart Air Recta';
        break;
      case TipoSolucion.PLATAFORMA_STARK_RECTA:
        this.nombreCatalogo = 'Plataforma Stark Recta';
        break;
      case TipoSolucion.PLATAFORMA_SUPRA_RECTA:
        this.nombreCatalogo = 'Plataforma Supra Recta';
        break;
      case TipoSolucion.PLATAFORMA_SUPRA_CURVA:
        this.nombreCatalogo = 'Plataforma Supra Curva';
        break;
      default:
    }
  }

  public submitForm(formulario: any) {
    // Accede a los valores del formulario utilizando el objeto ngForm
    const values = formulario.value;
    const mailRequest = new MailRequest();
    mailRequest.from = values.email;
    mailRequest.subject = 'Información catálogo ' + this.nombreCatalogo;
    mailRequest.body = 'El cliente ' + values.nombre + ' solicita información sobre el catálogo de ' + this.nombreCatalogo + '.\nCorreo electrónico: ' + values.email + '.\nTeléfono: ' + values.telefono + '.\nProvincia: ' + values.provincia + '.\n';

    this.emailService.enviarCorreo(mailRequest).subscribe(
      response => {
        this.descargarCatalogo();
        this.dialogRef.close();
        this.toastr.success('Catálogo descargado correctamente', '¡Gracias por su interés!');
      },
      error => {
        console.error('Error al enviar el correo', error);
        this.toastr.error('Error al descargar el catálogo', 'Error');
      }
    );
  }

  descargarCatalogo() {
    let nombreArchivo = 'catalogo-air-smart.pdf';
    switch (this.tipoSolucionSeleccionado) {
      case TipoSolucion.SILLA_SALVAESCALERAS_FLOW_X:
        nombreArchivo = 'catalogo-silla-flowx.pdf';
        break;
      case TipoSolucion.SILLA_SALVAESCALERAS_CURVA_DOBLE_RAIL:
        nombreArchivo = 'catalogo-silla-surva-doble-rail.pdf';
        break;
      case TipoSolucion.SILLA_SALVAESCALERAS_HOMEGLIDE:
      case TipoSolucion.SILLA_SALVAESCALERAS_HOMEGLIDE_EXTERIOR:
        nombreArchivo = 'catalogo-silla-homeglide.pdf';
        break;
      case TipoSolucion.SILLA_SALVAESCALERAS_SMART_AIR_CURVA:
      case TipoSolucion.SILLA_SALVAESCALERAS_SMART_AIR_RECTA:
        nombreArchivo = 'catalogo-air-smart.pdf';
        break;
      case TipoSolucion.PLATAFORMA_STARK_RECTA:
        nombreArchivo = 'catalogo-plataforma-stark-recta.pdf';
        break;
      case TipoSolucion.PLATAFORMA_SUPRA_RECTA:
      case TipoSolucion.PLATAFORMA_SUPRA_CURVA:
        nombreArchivo = 'catalogo-plataforma-recta-curva.pdf';
        break;
      default:

    }

    this.fileService.downloadFile(nombreArchivo).subscribe((data: Blob) => {
      const blob = new Blob([data], {type: 'application/octet-stream'});
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = nombreArchivo
      link.click();
    });
  }

  cerrarDialogo() {
    this.dialogRef.close();
  }
}
