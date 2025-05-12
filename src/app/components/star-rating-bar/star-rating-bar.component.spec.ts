import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingBarComponent } from './star-rating-bar.component';

describe('StarRatingBarComponent', () => {
  let component: StarRatingBarComponent;
  let fixture: ComponentFixture<StarRatingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarRatingBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarRatingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
