import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mutante } from '../models/mutante';

const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class MutanteService {
mutanteURL = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<Mutante[]> {
    return this.httpClient.get<Mutante[]>(this.mutanteURL + 'lista', cabecera);
  }

  public detalle(id: number): Observable<Mutante> {
    return this.httpClient.get<Mutante>(this.mutanteURL + `detalle/${id}`, cabecera);
  }

  public crear(mutante: Mutante): Observable<any> {
    return this.httpClient.post<any>(this.mutanteURL + 'nuevo', mutante, cabecera);
  }

  public editar(mutante: Mutante, id: number): Observable<any> {
    return this.httpClient.put<any>(this.mutanteURL + `actualizar/${id}`, mutante, cabecera);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.mutanteURL + `borrar/${id}`, cabecera);
  }
}
