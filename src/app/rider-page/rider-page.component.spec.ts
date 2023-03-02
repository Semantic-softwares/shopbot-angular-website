import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderPageComponent } from './rider-page.component';

describe('RiderPageComponent', () => {
  let component: RiderPageComponent;
  let fixture: ComponentFixture<RiderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
