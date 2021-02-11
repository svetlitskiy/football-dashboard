import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from '@api/api.service';
import { Observable } from 'rxjs';
import { LeagueInterface } from '@api/interfaces/league.interface';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaguesComponent {
  leagues$: Observable<LeagueInterface[]> = this.apiService.getLeagues();

  constructor(
    private readonly apiService: ApiService
  ) {}



}
