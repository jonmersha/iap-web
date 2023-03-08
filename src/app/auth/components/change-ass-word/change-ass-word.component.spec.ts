import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAssWordComponent } from './change-ass-word.component';

describe('ChangeAssWordComponent', () => {
  let component: ChangeAssWordComponent;
  let fixture: ComponentFixture<ChangeAssWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeAssWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeAssWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
