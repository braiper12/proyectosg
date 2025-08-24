import { Router, type CanActivateFn   } from '@angular/router';
import {  inject } from '@angular/core';
import { Authservice } from '../services/auth';
import { Observable } from 'rxjs';



export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(Authservice);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  console.warn('Acceso denegado - Usuario no autenticado');
  return router.createUrlTree(['/auth']);

  
};
