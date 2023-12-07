import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LectorComponent } from './lector/lector.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'leerQR', component: LectorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
