import { appRoutes } from './routerConfig';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from  '@angular/router';
import { KainosEmployeeComponent } from './kainos-employee/kainos-employee.component';

import { TrainerComponent } from './trainer/trainer.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KainosEmployeeComponent,
    TrainerComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
