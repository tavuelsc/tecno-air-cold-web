import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBackgroundCarouselComponent } from './home-background-carousel.component';

describe('HomeBackgroundCarouselComponent', () => {
  let component: HomeBackgroundCarouselComponent;
  let fixture: ComponentFixture<HomeBackgroundCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBackgroundCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeBackgroundCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
