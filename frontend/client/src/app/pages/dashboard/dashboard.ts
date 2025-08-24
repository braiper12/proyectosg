import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterLink, RouterLinkActive } from '@angular/router';

import { DashboardHeader } from '../../components/protected/dashboard-header/dashboard-header';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DashboardHeader],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {



}
