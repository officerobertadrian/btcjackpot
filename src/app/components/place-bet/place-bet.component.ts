import { Component } from '@angular/core';
import { RecentDrawInfo } from 'src/app/interfaces/recent-draw-info.interface';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-place-bet',
  templateUrl: './place-bet.component.html',
  styleUrls: ['./place-bet.component.scss']
})
export class PlaceBetComponent {
  nextDrawInfo: RecentDrawInfo;
  constructor(private mockDataService: MockDataService) {
    this.nextDrawInfo = this.mockDataService.getNextDrawInfo();
  }
  onClickPlayNow() {
    console.log('Play now!')
  }
}
