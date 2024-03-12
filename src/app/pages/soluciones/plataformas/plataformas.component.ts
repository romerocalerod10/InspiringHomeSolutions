import {Component} from '@angular/core';
import {TipoSolucion} from "../TipoSolucion";
import {FormularioCatalogoComponent} from "../../../components/formulario-catalogo/formulario-catalogo.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.css']
})
export class PlataformasComponent {

  protected readonly TipoSolucion = TipoSolucion;

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

}
