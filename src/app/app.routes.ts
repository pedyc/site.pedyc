import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', loadComponent: () => import('../pages/home/home.component').then(m => m.HomeComponent) },
    // { path: 'about', loadComponent: () => import('./about/about.component') },
    // { path: 'services', loadComponent: () => import('./services/services.component') },
    // { path: 'contact', loadComponent: () => import('./contact/contact.component') },
];
