import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TipoSolucion} from "../TipoSolucion";
import {FormularioCatalogoComponent} from "../../../components/formulario-catalogo/formulario-catalogo.component";

@Component({
  selector: 'app-sillas-salvaescaleras',
  templateUrl: './sillas-salvaescaleras.component.html',
  styleUrls: ['./sillas-salvaescaleras.component.css']
})
export class SillasSalvaescalerasComponent {

  constructor(private dialog: MatDialog) {
  }

  abrirDialogoCatalogo(tipoSolucion: TipoSolucion) {
    const dialogRef = this.dialog.open(FormularioCatalogoComponent, {
      width: '70vw',
      disableClose: true,
      data: {tipoSolucion: tipoSolucion}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  protected readonly TipoSolucion = TipoSolucion;
}


