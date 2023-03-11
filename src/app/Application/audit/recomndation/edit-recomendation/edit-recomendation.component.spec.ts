import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecomendationComponent } from './edit-recomendation.component';

describe('EditRecomendationComponent', () => {
  let component: EditRecomendationComponent;
  let fixture: ComponentFixture<EditRecomendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRecomendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
