import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../Services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  movieData: object[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    console.log("Get Movie Data works (Movie-card component)");
    this.movieService.getMovieData().then(response => {
      this.movieData = response.data;
    });
  }

}
