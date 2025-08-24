import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Authservice } from '../../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  imports: [CommonModule],

  templateUrl: './dashboard-header.html',
  styleUrl: './dashboard-header.scss'
})
export class DashboardHeader {
  private authService = inject(Authservice);
  private router = inject(Router);
  isMenuOpen = false;
  username = 'Usuario'; 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }



}
