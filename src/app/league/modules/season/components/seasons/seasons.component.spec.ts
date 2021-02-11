import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeasonsComponent } from './seasons.component';
import { FormBuilder } from '@angular/forms';
import { ShareModule } from '@share/share.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { ApiService } from '@api/api.service';

describe('LeagueComponent', () => {
  let component: SeasonsComponent;
  let fixture: ComponentFixture<SeasonsComponent>;

  const apiService = {
    getPost: jasmine.createSpy('getPost').and.returnValue(of({userId: 2, id: 3, title: 'Title', body: 'Body'}))
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareModule, NoopAnimationsModule],
      declarations: [ SeasonsComponent ],
      providers: [ FormBuilder, {
        provide: ApiService,
        useValue: apiService,
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
