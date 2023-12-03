import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { DrawInfo } from '../interfaces/draw-info.interface';
import { RecentDrawInfo } from '../interfaces/recent-draw-info.interface';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private drawInfo: DrawInfo = {
    date: new Date(new Date().getTime()+(5*24*60*60*1000)),
    pot: {
      crypto: '2.25',
      dollars: '89,899'
    }
  }
  private recentDrawsInfo: RecentDrawInfo[] = [
    {
      date: 'NOV 19, 2023',
      cryptoPot: '0.8',
      drawNumber: '8',
      participants: '10202',
      winner: 'a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d'
    },
    {
      date: 'NOV 18, 2023',
      cryptoPot: '0.9',
      drawNumber: '7',
      participants: '23266',
      winner: 'cx123x12db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d'
    },
    {
      date: 'NOV 17, 2023',
      cryptoPot: '0.5',
      drawNumber: '6',
      participants: '8006',
      winner: '54744b55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d'
    },
    {
      date: 'NOV 16, 2023',
      cryptoPot: '0.9',
      drawNumber: '5',
      participants: '24674',
      winner: 'e65rrb55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d'
    },
    {
      date: 'NOV 15, 2023',
      cryptoPot: '0.7',
      drawNumber: '4',
      participants: '10202',
      winner: '6y565db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d'
    },
    {
      date: 'NOV 14, 2023',
      cryptoPot: '1.1',
      drawNumber: '3',
      participants: '7553',
      winner: 'c142421b55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d'
    },
    {
      date: 'NOV 13, 2023',
      cryptoPot: '1',
      drawNumber: '2',
      participants: '103202',
      winner: 'vc142421b55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d'
    },
    {
      date: 'NOV 12, 2023',
      cryptoPot: '0.6',
      drawNumber: '1',
      participants: '1202',
      winner: 'b2342355d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d'
    }
  ]
  private userRecentDrawsInfo: RecentDrawInfo[] = [
    {
      date: 'NOV 19, 2023',
      cryptoPot: '0.8',
      status: 'WIN',
      bet: {
        crypto: '0.8',
        dollars: '31,964'
      },
      drawNumber: '8',
      participants: '10202',
      winner: 'a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d'
    },
    {
      date: 'NOV 16, 2023',
      cryptoPot: '0.9',
      status: 'LOOSE',
      bet: {
        crypto: '0.9',
        dollars: '35,959'
      },
      drawNumber: '5',
      participants: '24674',
      winner: 'e65rrb55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d'
    },
    {
      date: 'NOV 15, 2023',
      cryptoPot: '0.7',
      status: 'WIN',
      bet: {
        crypto: '0.7',
        dollars: '27,968'
      },
      drawNumber: '4',
      participants: '10202',
      winner: '6y565db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d'
    }
  ]
  private nextDrawInfo: RecentDrawInfo = {
    date: 'DEC 02, 2023',
    hour: '23:15',
    cryptoPot: '2.25',
    dollarsPot: '89,899',
    drawNumber: '9',
    participants: '19205'
  }
  private userIsConnected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getDrawInfo(): DrawInfo {
    return this.drawInfo;
  }
  getRecentDrawsInfo(): RecentDrawInfo[] {
    return this.recentDrawsInfo;
  }
  getUserRecentDrawsInfo(): RecentDrawInfo[] {
    return this.userRecentDrawsInfo;
  }
  setUserIsConnected(state: boolean): void {
    this.userIsConnected.next(state);
  }
  getUserIsConnected(): BehaviorSubject<boolean> {
    return this.userIsConnected;
  }
  getNextDrawInfo(): RecentDrawInfo {
    return this.nextDrawInfo;
  }
}
