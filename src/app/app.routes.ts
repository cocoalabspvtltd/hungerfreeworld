import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DiaryFarmComponent } from './views/diary-farm/diary-farm.component';

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  { path: 'Dairyfarmers', component: DiaryFarmComponent },
  { path: '**', component: HomeComponent }, // Catch-all route for 404 handling
];
