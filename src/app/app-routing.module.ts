import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LectorComponent } from './lector/lector.component';
import { ImagenComponent } from './imagen/imagen.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'leerQR', component: LectorComponent},
  {path: 'imagen', component: ImagenComponent},
  {path: 'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
