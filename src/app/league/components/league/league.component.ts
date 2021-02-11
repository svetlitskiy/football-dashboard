import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from '@api/api.service';
import { Observable } from 'rxjs';
import { LeagueInterface } from '@api/interfaces/league.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { SeasonInterface } from '@api/interfaces/season.interface';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueComponent implements OnInit{
  league$!: Observable<LeagueInterface>;
  seasons$!: Observable<SeasonInterface[]>;

  constructor(
    private readonly apiService: ApiService,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.league$ = this.getLeagueId().pipe(
      switchMap((leagueId: string) => this.apiService.getLeague(leagueId))
    );

    this.seasons$ = this.getLeagueId().pipe(
      switchMap((leagueId: string) => this.apiService.getSeasons(leagueId))
    );

  }

  private getLeagueId(): Observable<string> {
    return this.activatedRoute.params.pipe(
      filter((params: Params) => params.leagueId),
      map((params: Params) => params.leagueId),
    );
  }

}
