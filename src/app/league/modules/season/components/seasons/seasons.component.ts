import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApiService } from '@api/api.service';
import { Observable } from 'rxjs';
import { SeasonInterface } from '@api/interfaces/season.interface';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeasonsComponent {
  seasons$: Observable<SeasonInterface[]> = this.apiService.getSeasons();

  constructor(
    private apiService: ApiService
  ) {}

}
