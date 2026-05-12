import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: 'bi-grid' },
    { path: '/busqueda', label: 'Buscar Habilidades', icon: 'bi-search' },
    { path: '/agenda', label: 'Mi Agenda', icon: 'bi-calendar-event' },
    { path: '/solicitudes', label: 'Intercambios', icon: 'bi-arrow-left-right' },
    { path: '/planes', label: 'Premium', icon: 'bi-star-fill' },
    { path: '/chat', label: 'Mensajes', icon: 'bi-chat-dots' },
    { path: '/historial', label: 'Historial', icon: 'bi-journal-text' }
  ];
}
