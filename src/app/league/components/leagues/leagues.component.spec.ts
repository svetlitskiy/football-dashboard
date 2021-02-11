import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaguesComponent } from './leagues.component';
import { FormBuilder } from '@angular/forms';
import { ShareModule } from '@share/share.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { ApiService } from '@api/api.service';

describe('LeagueComponent', () => {
  let component: LeaguesComponent;
  let fixture: ComponentFixture<LeaguesComponent>;

  const apiService = {
    getPost: jasmine.createSpy('getPost').and.returnValue(of({userId: 2, id: 3, title: 'Title', body: 'Body'}))
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareModule, NoopAnimationsModule],
      declarations: [ LeaguesComponent ],
      providers: [ FormBuilder, {
        provide: ApiService,
        useValue: apiService,
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
