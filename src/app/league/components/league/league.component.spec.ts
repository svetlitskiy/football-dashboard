import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeagueComponent } from './league.component';
import { FormBuilder } from '@angular/forms';
import { ShareModule } from '@share/share.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { ApiService } from '@api/api.service';

describe('LeagueComponent', () => {
  let component: LeagueComponent;
  let fixture: ComponentFixture<LeagueComponent>;

  const apiService = {
    getPost: jasmine.createSpy('getPost').and.returnValue(of({userId: 2, id: 3, title: 'Title', body: 'Body'}))
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareModule, NoopAnimationsModule],
      declarations: [ LeagueComponent ],
      providers: [ FormBuilder, {
        provide: ApiService,
        useValue: apiService,
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
