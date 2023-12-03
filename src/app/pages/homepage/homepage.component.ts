import { Component } from '@angular/core';
import { DrawInfo } from 'src/app/interfaces/draw-info.interface';
import { RecentDrawInfo } from 'src/app/interfaces/recent-draw-info.interface';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  drawInfo: DrawInfo;
  recentDrawsInfo: RecentDrawInfo[];
  constructor(private mockDataService: MockDataService) {
    this.drawInfo = this.mockDataService.getDrawInfo();
    this.recentDrawsInfo = this.mockDataService.getRecentDrawsInfo();
  }
}
