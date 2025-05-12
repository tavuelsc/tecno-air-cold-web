import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-worker-card',
  imports: [],
  templateUrl: './team-worker-card.component.html',
  styleUrl: './team-worker-card.component.scss'
})
export class TeamWorkerCardComponent {
  @Input() workerImageUrl: string = "";
  @Input() workerName: string = "";
  @Input() roleName: string = "";
  @Input() roleDescription: string = "";
}
