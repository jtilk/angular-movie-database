import { Component, OnInit } from '@angular/core';
import {MovieService} from '../Services/movie.service';

@Component({
  selector: 'app-pop-movie-list',
  templateUrl: './pop-movie-list.component.html',
  styleUrls: ['./pop-movie-list.component.css']
})
export class PopMovieListComponent implements OnInit {

  movieData: object[];

  constructor(private movieService: MovieService) { }

  getPopMovieData(): any {
    console.log('Get Pop Movie Data works (Movie-list component)');
    this.movieService.getPopMovieData().then(response => {
      this.movieData = response.results ;
    });
  }

  ngOnInit() {
    this.movieService.getPopMovieData().then(response => {
      this.movieData = response.results ;
    });
  }
}
