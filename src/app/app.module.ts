import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LectorComponent } from './lector/lector.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LectorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
