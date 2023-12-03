import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonComponent } from './components/button/button.component';
import { DrawInfoComponent } from './components/draw-info/draw-info.component';
import { RecentDrawsComponent } from './components/recent-draws/recent-draws.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { FooterComponent } from './components/footer/footer.component';
import { RaffleComponent } from './pages/raffle/raffle.component';
import { StatsComponent } from './pages/stats/stats.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlaceBetComponent } from './components/place-bet/place-bet.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CountdownComponent } from './components/countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BannerComponent,
    ButtonComponent,
    DrawInfoComponent,
    RecentDrawsComponent,
    HowItWorksComponent,
    FooterComponent,
    RaffleComponent,
    StatsComponent,
    NavigationComponent,
    PlaceBetComponent,
    CustomInputComponent,
    CountdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
