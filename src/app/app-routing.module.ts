import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [

  { path: 'home', loadChildren: './modules/home/home.module#HomeModule'},
  { path: 'experience', loadChildren: './modules/experience/experience.module#ExperienceModule' },
  { path: 'qualification', loadChildren: './modules/qualification/qualification.module#QualificationModule' },
  { path: 'contact', loadChildren: './modules/contact/contact.module#ContactModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
