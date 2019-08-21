import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopMovieListComponent } from './pop-movie-list.component';

describe('PopMovieListComponent', () => {
  let component: PopMovieListComponent;
  let fixture: ComponentFixture<PopMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
