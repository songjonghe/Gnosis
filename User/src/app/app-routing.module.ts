import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule),
  },
  {
    path: 'landing', loadChildren: () => import('../app/pages/landing/landing.module').then(m=>m.LandingModule),
  },
  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
