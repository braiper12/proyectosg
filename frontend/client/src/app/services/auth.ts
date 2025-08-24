import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Authservice {
  private apiUrl = 'http://localhost:3000/users';
  private readonly TOKEN_KEY = 'token'; 

  constructor(private http: HttpClient) { }

  // Método para registrar un usuario
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // Método para iniciar sesión
  login(credentials: any): Observable<any> {
    return this.http.post<{ msg: string, token: string }>(`${this.apiUrl}/login`, credentials);
  }

  /**
   * Guarda el token JWT en localStorage.
   * @param token El token recibido del backend.
   */
  saveSession(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    console.log('Token guardado correctamente:', token.substring(0, 20) + '...');
  }

  /**
   * Obtiene el token de autenticación desde localStorage.
   * @returns El token como string, o null si no existe.
   */
  getToken(): string | null {
    const token = localStorage.getItem(this.TOKEN_KEY);
    console.log('Token obtenido:', token ? token.substring(0, 20) + '...' : 'No existe');
    return token;
  }

  /**
   * Elimina el token del localStorage
   */
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    console.log('Token eliminado');
  }

  /**
   * Verifica si el usuario está actualmente autenticado.
   * @returns `true` si hay un token, `false` en caso contrario.
   */
  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }

  /**
   * Obtiene el nombre de usuario (puedes expandir esto si decodificas el JWT)
   */
  getUsername(): string {
    
    return 'Usuario';
  }
}