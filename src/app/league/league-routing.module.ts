import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueComponent } from './components/league/league.component';
import { LeaguesComponent } from './components/leagues/leagues.component';

const routes: Routes = [
    {
        path: 'league/:leagueId',
        component: LeagueComponent,
    },
    {
        path: 'leagues',
        component: LeaguesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LeagueRoutingModule {}
