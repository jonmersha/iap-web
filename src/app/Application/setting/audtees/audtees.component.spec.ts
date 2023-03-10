import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudteesComponent } from './audtees.component';

describe('AudteesComponent', () => {
  let component: AudteesComponent;
  let fixture: ComponentFixture<AudteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudteesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
