import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuStructureComponent } from './ou-structure.component';

describe('OuStructureComponent', () => {
  let component: OuStructureComponent;
  let fixture: ComponentFixture<OuStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
