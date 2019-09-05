import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KainosEmployeeComponent } from './kainos-employee.component';

describe('KainosEmployeeComponent', () => {
  let component: KainosEmployeeComponent;
  let fixture: ComponentFixture<KainosEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KainosEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KainosEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
