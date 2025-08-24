import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment'; // Corregir ruta

export interface Empresa {
  _id?: string;
  id_empresa: string;
  name: string;
  nit: number;
  direccion: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/empresa`; // Corregir template literal

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  // Crear empresa
  create(empresa: Omit<Empresa, 'id_empresa' | '_id'>): Observable<any> {
    return this.http.post<any>(this.apiUrl, empresa, { headers: this.getHeaders() });
  }

  // Obtener todas las empresas
  getAll(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.getHeaders() });
  }

  // Obtener empresa por ID
  getById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/byid?id=${id}`, { headers: this.getHeaders() });
  }

  // Actualizar empresa
  update(id: string, empresa: Partial<Empresa>): Observable<any> {
    return this.http.put(`${this.apiUrl}/update?id=${id}`, empresa, { headers: this.getHeaders() });
  }
}