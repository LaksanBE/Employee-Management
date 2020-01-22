import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamProgressComponent } from './team-progress.component';

describe('TeamProgressComponent', () => {
  let component: TeamProgressComponent;
  let fixture: ComponentFixture<TeamProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
