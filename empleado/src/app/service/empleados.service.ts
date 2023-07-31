import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleados } from '../model/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  URL = 'http://localhost:8080/Usuario'
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Empleados[]> {
    return this.httpClient.get<Empleados[]>(this.URL + '/mostrar');
  }

 
}
