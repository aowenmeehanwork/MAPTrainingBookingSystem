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
import {HttpClientModule} from '@angular/common/http';

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
        NgForm,
        NgModel
      ],
      imports: [
        RouterModule.forRoot(appRoutes),
        HttpClientModule
      ]
    }).compileComponents();
  }));

 // AUTO-GENERATED TESTS, TO BE FIXED

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  });

  it('Should have the kainos MAP logo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled);
    expect(compiled.querySelector('body > booking-system-root > booking-system-home > nav > div > ul > li.primary-nav-first.dropdown > a').toBe());
  });

  // it('Should have a MAP tab', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('body > booking-system-root > booking-system-home > nav > div > ul > li.primary-nav-first.dropdown > a').textContent).toContain('Kainos MAP Engineering Academy logo');
  // });
  //
  // it('Should have a Kainos Employee tab', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('body > booking-system-root > booking-system-home > nav > div > ul > li:nth-child(2) > a').textContent).toContain('Kainos MAP Engineering Academy logo');
  // });
  //
  // it('Should have a trainer tab', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('body > booking-system-root > booking-system-home > nav > div > ul > li:nth-child(3) > a').textContent).toContain('Kainos MAP Engineering Academy logo');
  // });

});
