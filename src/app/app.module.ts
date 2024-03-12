import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InicioComponent} from './pages/inicio/inicio.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NosotrosComponent} from "./pages/nosotros/nosotros.component";
import {SolucionesComponent} from "./pages/soluciones/soluciones.component";
import {ServiciosComponent} from "./pages/servicios/servicios.component";
import {FAQComponent} from "./pages/faq/faq.component";
import {ContactoComponent} from "./pages/contacto/contacto.component";
import {PresupuestoComponent} from "./pages/presupuesto/presupuesto.component";
import {CarruselImagenesComponent} from './components/carrusel-imagenes/carrusel-imagenes.component';
import {FormularioContactoComponent} from './components/formulario-contacto/formulario-contacto.component';
import {FormularioPresupuestoComponent} from './components/formulario-presupuesto/formulario-presupuesto.component';
import {FormsModule} from "@angular/forms";
import {SillasSalvaescalerasComponent} from './pages/soluciones/sillas-salvaescaleras/sillas-salvaescaleras.component';
import {PlataformasComponent} from './pages/soluciones/plataformas/plataformas.component';
import {PoliticaPrivacidadComponent} from './pages/politica-privacidad/politica-privacidad.component';
import {FormularioCatalogoComponent} from './components/formulario-catalogo/formulario-catalogo.component';
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    NosotrosComponent,
    SolucionesComponent,
    ServiciosComponent,
    FAQComponent,
    ContactoComponent,
    PresupuestoComponent,
    CarruselImagenesComponent,
    FormularioContactoComponent,
    FormularioPresupuestoComponent,
    SillasSalvaescalerasComponent,
    PlataformasComponent,
    PoliticaPrivacidadComponent,
    FormularioCatalogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
