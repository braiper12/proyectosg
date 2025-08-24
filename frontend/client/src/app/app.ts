import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { CommonModule } from '@angular/common';
import { Authservice } from './services/auth';

@Component({
    selector: 'app-root',  
    standalone: true,
    imports: [RouterOutlet, Navbar, CommonModule],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App implements OnInit {

    private authService = inject(Authservice);

    ngOnInit() {
        // Limpiar localStorage en desarrollo
        if (this.isDevelopment()) {
            localStorage.clear();
            console.log('🧹 localStorage limpiado para desarrollo');
        }
    }

    private isDevelopment(): boolean {
        return window.location.hostname === 'localhost' || 
               window.location.hostname === '127.0.0.1';
    }

    get isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }
}