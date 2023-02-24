import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngamentListComponent } from './engament-list.component';

describe('EngamentListComponent', () => {
  let component: EngamentListComponent;
  let fixture: ComponentFixture<EngamentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngamentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngamentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
