import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Params } from '@angular/router';
import { LeagueInterface } from '@api/interfaces/league.interface';
import { CountryInterface } from '@api/interfaces/country.interface';
import { processApiDataHelper } from '@api/helpers/process-api-data.helper';
import { SeasonInterface } from '@api/interfaces/season.interface';


@Injectable({
  providedIn: 'root',
})

export class ApiService {
  constructor(
    private http: HttpClient
  ) {}

  public getCountries(): Observable<CountryInterface[]> {
    return this.get<CountryInterface[]>(`/api/countries`);
  }

  public getSeasons(seasonId: string): Observable<SeasonInterface[]> {
    return this.get<SeasonInterface[]>(`/api/seasons/${seasonId}`);
  }

  public getLeagues(): Observable<LeagueInterface[]> {
    return this.get<LeagueInterface[]>(`/api/leagues`, { subscribed: 'true' }).pipe(
      tap((data: any) => console.log('getLeagues', data)),
    );
  }

  public getLeague(leagueId: string): Observable<LeagueInterface> {
    return this.get<LeagueInterface>(`/api/leagues/${leagueId}`);
  }

  private get<T>(url: string, params: Params = {}): Observable<T> {
    return this.http.get<{ data: T }>(url, { params }).pipe(
      map((response: {data: T}) => processApiDataHelper<T>(response.data))
    );
  }

}
