import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CompanyValue {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

 // Textos principales de la sección
  whoAreWe = '<strong>Seguros SG</strong> es una empresa colombiana especializada en brindar soluciones integrales en seguros, seguridad y salud en el trabajo, y consultoría jurídica. Con más de 10 años de experiencia, nos hemos consolidado como líderes en el mercado nacional.';
  ourTeam = 'Nuestro equipo multidisciplinario está conformado por profesionales altamente calificados en ingeniería, derecho, medicina ocupacional y administración de riesgos, comprometidos con la excelencia y la satisfacción de nuestros clientes.';
  ourMission = 'Proteger y asesorar a las empresas colombianas mediante servicios integrales de seguros, SST y consultoría jurídica, contribuyendo al desarrollo sostenible y la competitividad empresarial.';

  // Lista de valores para renderizar con *ngFor
  values: CompanyValue[] = [
    { icon: 'fas fa-heart text-danger', title: 'Compromiso', description: 'Dedicación total con nuestros clientes' },
    { icon: 'fas fa-star text-warning', title: 'Excelencia', description: 'Calidad superior en nuestros servicios' },
    { icon: 'fas fa-handshake text-success', title: 'Confianza', description: 'Relaciones sólidas y duraderas' },
    { icon: 'fas fa-lightbulb text-info', title: 'Innovación', description: 'Soluciones creativas y eficientes' }
  ];

  // Lista de certificaciones
  certifications: string[] = [
    'ISO 9001:2015 - Gestión de Calidad',
    'ISO 45001:2018 - Seguridad y Salud',
    'Registro Nacional de Consultores SST',
    'Cámara de Comercio de Bogotá'
  ];

}
