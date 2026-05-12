import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'registro',
    loadComponent: () => import('./features/auth/registro/registro.component').then(m => m.RegistroComponent)
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'busqueda',
        loadComponent: () => import('./features/search/search.component').then(m => m.SearchComponent)
      },
      {
        path: 'solicitudes',
        loadComponent: () => import('./features/exchanges/requests/requests.component').then(m => m.RequestsComponent)
      },
      {
        path: 'agenda',
        loadComponent: () => import('./features/exchanges/agenda/agenda.component').then(m => m.AgendaComponent)
      },
      {
        path: 'chat',
        loadComponent: () => import('./features/exchanges/chat/chat.component').then(m => m.ChatComponent)
      },
      {
        path: 'historial',
        loadComponent: () => import('./features/exchanges/history/history.component').then(m => m.HistoryComponent)
      },
      {
        path: 'finalizar',
        loadComponent: () => import('./features/exchanges/feedback/feedback.component').then(m => m.FeedbackComponent)
      },
      {
        path: 'planes',
        loadComponent: () => import('./features/billing/plans/plans.component').then(m => m.PlansComponent)
      },
      {
        path: 'checkout',
        loadComponent: () => import('./features/billing/checkout/checkout.component').then(m => m.CheckoutComponent)
      },
      {
        path: 'perfil/:id',
        loadComponent: () => import('./features/profile/user-profile/user-profile.component').then(m => m.UserProfileComponent)
      },
      {
        path: 'configuracion',
        loadComponent: () => import('./features/profile/settings/settings.component').then(m => m.SettingsComponent)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];
