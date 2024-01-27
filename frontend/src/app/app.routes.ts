import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
	{path : '', component : LandingPageComponent,  canActivate :[AuthGuard]}
	,{path: 'books', loadChildren: () => import('./book-management/book-management.routes').then(mod => mod.bookManagementRoutes)}
];
