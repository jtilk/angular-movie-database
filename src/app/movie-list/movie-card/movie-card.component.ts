import { Component, OnInit, Input } from '@angular/core';
import {MovieService} from '../../Services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  movieDetails: any;
  constructor(private movieService: MovieService) { }

  addToWatchlist(movie: object): void {
    this.movieService.addToWatchListService(movie);
  }

  ngOnInit() {
    this.movieService.getMovieDetails(this.movie.id).then(response => {
      this.movieDetails = response ;
      console.log(this.movieDetails);
    });

  }

}
