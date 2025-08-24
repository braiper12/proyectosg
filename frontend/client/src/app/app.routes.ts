import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Auth } from './pages/auth/auth';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth-guard'; 
import { Empresas } from './pages/empresas/empresas/empresas';
import { ProtectedLayout } from './components/protected/protected-layout/protected-layout';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'auth', component: Auth },
  
 {
    path: '',
    component: ProtectedLayout,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'empresas', component: Empresas }
    ]
  },
  // Ruta comodín al final
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];