import {UsuarioComponent} from "./usuario.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {FormularioComponent} from "./formulario/formulario.component";


export const UsuarioRoutes: Routes = [
  {
    path:'usuarios',
    redirectTo: 'usuarios/listar'
  },
  {
    path: 'usuarios/listar',
    component: UsuarioComponent,
  },
  {
    path: 'usuarios/cadastrar',
    component: FormularioComponent
  }


]

@NgModule(
  {
    imports: [
      RouterModule.forChild(UsuarioRoutes)
    ],
    exports: [
      RouterModule
    ]
  }
)
export class UsuarioRountingModule {

}
