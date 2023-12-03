import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DrawInfo } from 'src/app/interfaces/draw-info.interface';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-draw-info',
  templateUrl: './draw-info.component.html',
  styleUrls: ['./draw-info.component.scss']
})
export class DrawInfoComponent {
  @Input() drawInfo: DrawInfo | null = null;
  userIsConnected: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);
  constructor(private mockDataService: MockDataService, private router: Router) {
    this.mockDataService.getUserIsConnected().subscribe(this.userIsConnected);
  }
  connectToWallet() {
    this.mockDataService.setUserIsConnected(true);
  }
  playNow() {
    this.router.navigate(['/raffle']);
  }
}
