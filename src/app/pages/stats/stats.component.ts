import { Component } from '@angular/core';
import { RecentDrawInfo } from 'src/app/interfaces/recent-draw-info.interface';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  userRecentDrawsInfo: RecentDrawInfo[];
  constructor(private mockDataService: MockDataService) {
    this.userRecentDrawsInfo = this.mockDataService.getUserRecentDrawsInfo();
  }
}
