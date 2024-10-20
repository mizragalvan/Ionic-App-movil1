import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

   // Método para obtener los alumnos
   getAlumnos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/alumnos`);
}

// Método para obtener los padres
getPadres(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/padres`);
}
}