import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RaffleComponent } from './pages/raffle/raffle.component';
import { StatsComponent } from './pages/stats/stats.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'raffle',
    component: RaffleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
