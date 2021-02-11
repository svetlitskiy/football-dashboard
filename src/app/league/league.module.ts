import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueComponent } from './components/league/league.component';
import { LeagueRoutingModule } from './league-routing.module';
import { ShareModule } from '@share/share.module';
import { LeaguesComponent } from './components/leagues/leagues.component';

@NgModule({
  declarations: [LeagueComponent, LeaguesComponent],
  imports: [
    CommonModule,
    LeagueRoutingModule,
    ShareModule,
  ]
})
export class LeagueModule { }
