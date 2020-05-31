import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioServiceService} from "./usuario-service.service";
import {Usuario} from "../model/usuario";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];
  isLoadingResults = true;


  constructor(private api: UsuarioServiceService) { }

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
          alert(error)
          this.isLoadingResults = false;
        }
      )
  }


}
