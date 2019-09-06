import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
// import {AppComponent} from "../app.component";
// import {HeaderComponent} from "../header/header.component";
// import {HomeComponent} from "../home/home.component";
import {KainosEmployeeComponent} from '../kainos-employee/kainos-employee.component';
import {TrainerComponent} from '../trainer/trainer.component';
import {RouterModule, RouterOutlet} from '@angular/router';
import {NgForm, NgModel} from '@angular/forms';
import {appRoutes} from '../routerConfig';
import { HttpClientModule } from '@angular/common/http';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MapComponent,
        KainosEmployeeComponent,
        TrainerComponent,
        // RouterOutlet,
        NgForm,
        NgModel
      ],
      imports: [
        RouterModule.forRoot(appRoutes),
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
