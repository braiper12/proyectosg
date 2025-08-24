import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para usar *ngFor

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {

// lista de servicios
  services: Service[] = [
    {
      icon: 'fas fa-hard-hat',
      title: 'Seguridad y Salud en el Trabajo',
      description: 'Implementación de sistemas de gestión SST, capacitaciones, evaluaciones de riesgo y cumplimiento normativo.',
      features: ['Matriz de peligros y riesgos', 'Programa de capacitación', 'Auditorías internas']
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Seguros Empresariales',
      description: 'Asesoría integral en seguros de vida, ARL, responsabilidad civil, y más para proteger tu empresa.',
      features: ['Seguros de vida grupo', 'ARL y accidentes', 'Responsabilidad civil']
    },
    {
      icon: 'fas fa-gavel',
      title: 'Consultoría Jurídica',
      description: 'Asesoría legal especializada en derecho laboral, corporativo y cumplimiento normativo para empresas.',
      features: ['Derecho laboral', 'Contratos empresariales', 'Cumplimiento normativo']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Gestión de Riesgos',
      description: 'Identificación, evaluación y control de riesgos operacionales para minimizar pérdidas y maximizar la productividad.',
      features: ['Análisis de riesgos', 'Planes de contingencia', 'Monitoreo continuo']
    },
    {
      icon: 'fas fa-users',
      title: 'Capacitación Empresarial',
      description: 'Programas de formación especializados para fortalecer las competencias del talento humano de tu organización.',
      features: ['Capacitación SST', 'Liderazgo y gestión', 'Brigadas de emergencia']
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Auditorías y Certificaciones',
      description: 'Apoyo en procesos de certificación bajo estándares nacionales e internacionales como ISO 45001.',
      features: ['Auditorías SST', 'ISO 45001', 'Certificaciones de calidad']
    }
  ];

}
