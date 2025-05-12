import { Component } from '@angular/core';
import { TeamWorkerCardComponent } from '../../components/team-worker-card/team-worker-card.component';

@Component({
  selector: 'app-team',
  imports: [TeamWorkerCardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

}
