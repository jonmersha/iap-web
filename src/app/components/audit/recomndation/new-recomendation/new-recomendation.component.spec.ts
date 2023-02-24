import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecomendationComponent } from './new-recomendation.component';

describe('NewRecomendationComponent', () => {
  let component: NewRecomendationComponent;
  let fixture: ComponentFixture<NewRecomendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRecomendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
