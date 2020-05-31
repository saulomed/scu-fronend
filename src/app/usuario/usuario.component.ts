import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioServiceService} from "./usuario-service.service";
import {Usuario} from "../model/usuario";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];
  isLoadingResults = true;

  constructor(private api: UsuarioServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.api.obtemListaUsuarios()
      .subscribe(
        resultado => {
          this.usuarios = resultado;
          console.log(`lista usuario: ${this.usuarios}`);
          this.isLoadingResults = false;
        },
        error =>
        {
          console.log(error);
          this.toastr.error("Falha ao carregar lista de usuários","Erro")
          this.isLoadingResults = false;
        }
      )
  }


}
