import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEngamentComponent } from './new-engament.component';

describe('NewEngamentComponent', () => {
  let component: NewEngamentComponent;
  let fixture: ComponentFixture<NewEngamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEngamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEngamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
