import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface SocialLink {
  url: string;
  icon: string;
  colorClass: string;
}


@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit {

  contactForm!: FormGroup;
  formSubmitted = false;

  //inyectar el servicio FormBuilder
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: [''],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.invalid) {
      console.log('Formulario no válido');
      return;
    }


    console.log('Formulario enviado:', this.contactForm.value);
  }

  contactInfo = {
    address: 'Madrid, Cundinamarca, Colombia',
    phone1: '+57 301 123 4567',
    phone2: '+57 301 765 4321',
    email: 'prueba@gmail.com',
    schedule: 'lunes a viernes de 8:00 a.m. a 5:00 p.m.',

  };
   socialLinks: SocialLink[] = [
    { url: 'https://facebook.com', icon: 'fab fa-facebook', colorClass: 'text-primary' },
    { url: 'https://twitter.com', icon: 'fab fa-twitter', colorClass: 'text-info' },
    { url: 'https://linkedin.com', icon: 'fab fa-linkedin', colorClass: 'text-primary' },
    { url: 'https://wa.me/573001234567', icon: 'fab fa-whatsapp', colorClass: 'text-success' }
  ];




}
