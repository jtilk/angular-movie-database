import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopMovieCardComponent } from './pop-movie-card.component';

describe('PopMovieCardComponent', () => {
  let component: PopMovieCardComponent;
  let fixture: ComponentFixture<PopMovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopMovieCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
