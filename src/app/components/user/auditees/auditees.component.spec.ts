import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditeesComponent } from './auditees.component';

describe('AuditeesComponent', () => {
  let component: AuditeesComponent;
  let fixture: ComponentFixture<AuditeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
