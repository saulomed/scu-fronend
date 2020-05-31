import {NgModule} from "@angular/core";
import {UsuarioComponent} from "./usuario.component";
import {FormularioComponent} from "./formulario/formulario.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {UsuarioRountingModule} from "./usuario-rounting.module";
import {UsuarioServiceService} from "./usuario-service.service";
import {UsuarioRoutingComponent} from "./usuario-routing.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";


@NgModule({
  declarations: [
    UsuarioComponent,
    FormularioComponent,
    UsuarioRoutingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsuarioRountingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule
  ],
  exports: [
    UsuarioComponent,
    FormularioComponent
  ],
  providers:
    [
      UsuarioServiceService
    ]
})
export class UsuarioModule{}
