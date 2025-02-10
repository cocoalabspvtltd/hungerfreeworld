import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/views/home/home.component';
const routes: Routes = [
  { path: '',                  redirectTo   : 'index', pathMatch: 'full'   },
  { path: 'index',              component    :  HomeComponent               }, 
  { path: '*',                  component    :  HomeComponent               }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
