import { Component, Input } from '@angular/core';
import { RecentDrawInfo } from 'src/app/interfaces/recent-draw-info.interface';

@Component({
  selector: 'app-recent-draws',
  templateUrl: './recent-draws.component.html',
  styleUrls: ['./recent-draws.component.scss']
})
export class RecentDrawsComponent {
  @Input() recentDraws: RecentDrawInfo[] | null = null;
  @Input() title: string | null = null;
}
