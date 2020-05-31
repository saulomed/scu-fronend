import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {Usuario} from "../model/usuario";
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = environment.URL_API;

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http: HttpClient) {
  }

  /**
   * Realiza o tratamento de erro recebido das requisições rest
   * @param erro
   */
  private tratamentoErro(erro: any) {
    return throwError (erro.error.message)
  }

  /**
   * Obter a lista de todos os usuarios no servidor
   */
  obtemListaUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(apiUrl)
      .pipe(
        tap(resultado => console.log('usuarios retornados')),
        catchError((error: Response) => this.tratamentoErro(error))
      )
  }

  /**
   * Realiza a adição de um usuario a base de dados
   * @param usuario
   */
  adicionarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(apiUrl, usuario, httpOptions).pipe(
      tap((usuario: Usuario) => console.log(`usuario adicionado id: ${usuario.id}`)),
      catchError((error: Response) => this.tratamentoErro(error))
    )
  }
}
