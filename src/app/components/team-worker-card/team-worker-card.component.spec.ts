import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWorkerCardComponent } from './team-worker-card.component';

describe('TeamWorkerCardComponent', () => {
  let component: TeamWorkerCardComponent;
  let fixture: ComponentFixture<TeamWorkerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamWorkerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamWorkerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
