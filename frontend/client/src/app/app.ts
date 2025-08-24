import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { CommonModule } from '@angular/common';
import { Authservice } from './services/auth';


@Component({
    selector: 'app-root',  
    standalone: true,
    imports: [RouterOutlet, Navbar, CommonModule],  // Agregar RouterOutlet y Navbar
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {

    private authService = inject(Authservice);

      get isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }

 //protected readonly title = signal('client');
}
