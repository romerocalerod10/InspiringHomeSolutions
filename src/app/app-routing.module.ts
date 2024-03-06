import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./pages/inicio/inicio.component";
import {NosotrosComponent} from "./pages/nosotros/nosotros.component";
import {SolucionesComponent} from "./pages/soluciones/soluciones.component";
import {FAQComponent} from "./pages/faq/faq.component";
import {ContactoComponent} from "./pages/contacto/contacto.component";
import {PresupuestoComponent} from "./pages/presupuesto/presupuesto.component";
import {SillasSalvaescalerasComponent} from "./pages/soluciones/sillas-salvaescaleras/sillas-salvaescaleras.component";
import {PlataformasComponent} from "./pages/soluciones/plataformas/plataformas.component";
import {PoliticaPrivacidadComponent} from "./pages/politica-privacidad/politica-privacidad.component";


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'soluciones/sillas-salvaescaleras', component: SillasSalvaescalerasComponent },
  { path: 'soluciones/plataformas', component: PlataformasComponent },
  { path: 'nosotros', component: NosotrosComponent },
  // { path: 'servicios', component: ServiciosComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'presupuesto', component: PresupuestoComponent },
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
