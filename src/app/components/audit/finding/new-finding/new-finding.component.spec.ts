import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFindingComponent } from './new-finding.component';

describe('NewFindingComponent', () => {
  let component: NewFindingComponent;
  let fixture: ComponentFixture<NewFindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
