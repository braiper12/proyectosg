import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardHeader } from '../dashboard-header/dashboard-header';
import { DashboardSidebar } from '../dashboard-sidebar/dashboard-sidebar';

@Component({
  selector: 'app-protected-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DashboardHeader, DashboardSidebar],
  template: `
    <div class="protected-layout">
      <app-dashboard-sidebar #sidebar></app-dashboard-sidebar>
      
      <div class="main-content" [class.sidebar-collapsed]="sidebar.isCollapsed">
        <app-dashboard-header></app-dashboard-header>
        <main class="content-area">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .protected-layout {
      display: flex;
      height: 100vh;
      overflow: hidden;
      position: relative;
    }

    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 280px;
      height: 100vh;
      overflow: hidden;
      transition: margin-left 0.3s ease;
      min-width: 0; // Permitir que se comprima si es necesario

      &.sidebar-collapsed {
        margin-left: 80px;
      }
    }

    .content-area {
      flex: 1;
      overflow-y: auto;
      background-color: #F0F4F8;
      min-height: 0; // Permitir que el contenido se adapte
    }

    @media (max-width: 768px) {
      .protected-layout {
        flex-direction: column;
        height: auto;
        min-height: 100vh;
      }
      
      .main-content {
        margin-left: 0;
        height: auto;

        &.sidebar-collapsed {
          margin-left: 0;
        }
      }

      .content-area {
        height: auto;
        min-height: calc(100vh - 60px);
      }
    }
  `]
})
export class ProtectedLayout {}