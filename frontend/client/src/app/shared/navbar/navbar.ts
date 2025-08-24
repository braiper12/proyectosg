import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
    isMenuCollapsed = true;
    activeSection = 'home';

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  closeMenu() {
    this.isMenuCollapsed = true;
  }

  scrollToSection(section: string) {
    this.activeSection = section;
    this.closeMenu();

    const element = document.getElementById(section);
    if (element) {
     const navbar = document.querySelector('.navbar-custom');
     const navbarHeight = navbar ? navbar.clientHeight : 76;

     const elementPosition = element.offsetTop - navbarHeight - 20;

     window.scrollTo({
       top: elementPosition,
       behavior: 'smooth'
     });
    }
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }

}