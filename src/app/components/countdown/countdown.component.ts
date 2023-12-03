import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent {
  @Input() countDownDate: any;
  hours: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['0']);
  minutes: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['0']);
  seconds: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['0']);
  constructor() {
    setInterval(() => {
      const now = new Date().getTime()
      const distance = this.countDownDate - now;
      this.hours.next(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().split(''));
      this.minutes.next(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().split(''));
      this.seconds.next(Math.floor((distance % (1000 * 60)) / 1000).toString().split(''));
    }, 1000)
  }
}
