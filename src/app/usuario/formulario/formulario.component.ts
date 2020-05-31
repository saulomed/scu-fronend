import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {UsuarioServiceService} from "../usuario-service.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioUsuario: FormGroup;
  isLoadingResults = false;

  constructor(private fb: FormBuilder, private api: UsuarioServiceService, private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.criarFormularioUsuario();
  }

  criarFormularioUsuario() {
    this.formularioUsuario = this.fb.group(
      {
        nome: [
          '',
          Validators.compose([Validators.required])
        ],
        login: [
          '',
          Validators.compose([Validators.required])
        ],
        senha: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(5)
          ])
        ]
      }
    );
  }

  enviarDados() {
    console.log(this.formularioUsuario);
  }

  onFormSubmit(form: FormGroup) {
    this.isLoadingResults = true;
    let usuario = {
      id: 0,
      nome: form.value['nome'],
      login: form.value['login'],
      senha: form.value['senha']

    }
    this.api.adicionarUsuario(usuario)
      .subscribe(resultado => {
          this.router.navigate(['/usuarios/listar'])
          this.toastr.success("Usuário Cadastrado com sucesso.", "Sucesso")

        }, (error) => {

          this.toastr.error(error, "Erro")
          this.isLoadingResults = false;
        }
      )
  }
}
