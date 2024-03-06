import { Component } from '@angular/core';

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
  submitForm(formulario: any) {
    // Accede a los valores del formulario utilizando el objeto ngForm
    const values = formulario.value;

    // Ahora puedes hacer lo que quieras con los valores del formulario
    console.log('Valores del formulario:', values);

    // Puedes enviar los valores a un servicio, realizar una petición HTTP, etc.
  }

}
