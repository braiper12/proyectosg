import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authservice } from '../../services/auth';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [

    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.scss'
})
export class Auth implements OnInit {

  isLoginView = true;
  loginForm!: FormGroup;
  registerForm!: FormGroup;


  constructor(private fb: FormBuilder, private authService: Authservice,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      id_empresa: ['', Validators.required]
    });
  }

  toggleView(): void {
    this.isLoginView = !this.isLoginView;
  }

   onLoginSubmit(): void {
    // 1. Validar el formulario
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); // Muestra errores si los campos están vacíos
      return;
    }

    // 2. Llamar al servicio de autenticación
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        // ÉXITO: El backend devolvió el token
        console.log('Login exitoso:', response);
        // 3. Guardar la sesión (lo implementaremos en el servicio en el siguiente paso)
        this.authService.saveSession(response.token);

        // 4. Redirigir al usuario 
        alert('¡Bienvenido!');
         this.router.navigate(['/dashboard'])
        .then(() => console.log('Navegación exitosa'))
        .catch(err => console.error('Error en navegación:', err));
    },
      error: (err) => {
        // ERROR: Credenciales incorrectas, servidor caído, etc.
        console.error('Error en el login:', err);
        // Muestra un mensaje de error claro al usuario
        alert(err.error.msg || 'Correo o contraseña incorrectos.');
      }
    });
  }


  onRegisterSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    // 1 obtener valores del formulario
    const formData = this.registerForm.value;
    // añadir el rol, por simplicidad es fijo, pero puede manejarse con un selector

    const userData = {
      ...formData,
      rol: 'usuario'
    }

    // 3 llamar al servicio
    this.authService.register(userData).subscribe({
      next: (response) => {
        console.log('Registro exitoso', response);
        // redirigir al login, buena practica
        this.isLoginView = true;
        alert('Registro exitoso, por favor inicia sesión.');
        this.registerForm.reset();
      },
      error: (error) => {
        console.error('Error en el registro', error);
        alert(`Error al registrar: ${error.error.message || 'Inténtalo de nuevo más tarde'}`);
      }
    });
  }
}
