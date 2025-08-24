import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Empresa, EmpresaService } from '../../../services/empresa.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './empresas.html',
  styleUrl: './empresas.scss'
})
export class Empresas implements OnInit {
  private empresaService = inject(EmpresaService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  empresas: Empresa[] = [];
  empresaForm!: FormGroup;
  isEditing: boolean = false;
  editingId = '';
  showForm: boolean = false;
  loading = false;

  ngOnInit(): void {
    this.initForm();
    this.loadEmpresas();
  }

  initForm(): void {
    this.empresaForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      nit: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      direccion: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  initEditForm(): void {
    this.empresaForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      direccion: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  loadEmpresas(): void {
    // Verificar si hay token antes de hacer la petición
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No hay token disponible');
      alert('Sesión expirada. Por favor, inicia sesión nuevamente.');
      this.router.navigate(['/auth']);
      return;
    }

    console.log('Token encontrado:', token.substring(0, 20) + '...');
    this.loading = true;

    this.empresaService.getAll().subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response);
        this.empresas = response.data || response.empresas || [];
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar empresas:', error);
        this.loading = false;

        if (error.status === 401) {
          alert('Sesión expirada. Por favor, inicia sesión nuevamente.');
          localStorage.removeItem('token');
          this.router.navigate(['/auth']);
        } else {
          alert('Error al cargar las empresas');
        }
      }
    });
  }

  onSubmit(): void {
    if (this.empresaForm.invalid) {
      this.empresaForm.markAllAsTouched();
      return;
    }

    const formData = this.empresaForm.value;
    // Convertir NIT a número
    formData.nit = parseInt(formData.nit);

    console.log('Enviando datos:', formData);
    this.loading = true;

    if (this.isEditing) {

      const updatedData = { name: formData.name, direccion: formData.direccion };

      console.log('Enviando datos', updatedData);
      this.loading = true;

      this.empresaService.update(this.editingId, updatedData).subscribe({
        next: (response) => {
          console.log('Empresa actualizada:', response);
          this.loadEmpresas();
          this.resetForm();
          alert('Empresa actualizada correctamente');
        },
        error: (error) => {
          console.error('Error al actualizar:', error);
          this.loading = false;
          alert(error.error?.error || 'Error al actualizar la empresa');
        }
      });
    } else {
      this.empresaService.create(formData).subscribe({
        next: (response) => {
          console.log('Empresa creada:', response);
          this.loadEmpresas();
          this.resetForm();
          alert('Empresa creada correctamente');
        },
        error: (error) => {
          console.error('Error al crear:', error);
          this.loading = false;
          alert(error.error?.error || 'Error al crear la empresa');
        }
      });
    }
  }

  editEmpresa(empresa: Empresa): void {
    this.isEditing = true;
    this.editingId = empresa.id_empresa;
    this.showForm = true;

    this.initEditForm();

    this.empresaForm.patchValue({
      name: empresa.name,
      //nit: empresa.nit.toString(),
      direccion: empresa.direccion
    });
  }

  resetForm(): void {
    this.empresaForm.reset();
    this.isEditing = false;
    this.editingId = '';
    this.showForm = false;
    this.loading = false;
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }
}