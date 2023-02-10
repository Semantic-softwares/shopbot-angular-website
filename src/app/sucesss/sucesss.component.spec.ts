import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucesssComponent } from './sucesss.component';

describe('SucesssComponent', () => {
  let component: SucesssComponent;
  let fixture: ComponentFixture<SucesssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucesssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucesssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
