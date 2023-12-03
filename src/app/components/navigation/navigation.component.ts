import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  showMenu = false;
  userIsConnected: BehaviorSubject<boolean>;
  constructor(private router: Router, private mockDataService: MockDataService) {
    this.userIsConnected = this.mockDataService.getUserIsConnected();
  }
  onClickMenu() {
    this.showMenu = !this.showMenu;
    if (this.showMenu) {
      document.body.style.overflow = 'hidden';
      document.body.style.maxHeight = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.maxHeight = 'unset';
    }
  }
  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
    this.showMenu = false;
    document.body.style.overflow = 'unset';
    document.body.style.maxHeight = 'unset';
  }
}
