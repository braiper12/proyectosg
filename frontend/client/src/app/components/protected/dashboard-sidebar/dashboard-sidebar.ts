import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// 1. AÑADIMOS LA INTERFAZ (Buena práctica para definir la "forma" de nuestros objetos)
// Se suele colocar antes del decorador @Component.
interface NavItem {
  link: string;
  label: string;
  icon: string;
  disabled?: boolean;
  exactMatch?: boolean;
}

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], 
  templateUrl: './dashboard-sidebar.html',
  styleUrls: ['./dashboard-sidebar.scss']
})
export class DashboardSidebar { 
 isCollapsed = false;

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

 navItems: NavItem[] = [
    {
      link: '/dashboard',
      label: 'Dashboard',
      icon: 'fas fa-home',
      exactMatch: true
    },
    {
      link: '/empresas',
      label: 'Empresas',
      icon: 'fas fa-building'
    },
    {
      link: '/usuarios',
      label: 'Usuarios',
      icon: 'fas fa-users',
      disabled: true
    }
  ];
}