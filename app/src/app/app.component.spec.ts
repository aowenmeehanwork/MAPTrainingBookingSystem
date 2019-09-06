import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {MapComponent} from './map/map.component';
import {KainosEmployeeComponent} from './kainos-employee/kainos-employee.component';
import {HomeComponent} from './home/home.component';
import {TrainerComponent} from './trainer/trainer.component';
import {RouterModule, RouterOutlet} from '@angular/router';
import {NgForm, NgModel} from '@angular/forms';
import {appRoutes} from './routerConfig';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        MapComponent,
        KainosEmployeeComponent,
        TrainerComponent,
        RouterOutlet,
        NgForm,
        NgModel
      ],
      imports: [
        RouterModule.forRoot(appRoutes)
      ]
    }).compileComponents();
  }));
  //
  // AUTO-GENERATED TESTS, TO BE FIXED
  //
  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });
  //
  // it(`should have as title 'app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // });
  //
  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // });
});
