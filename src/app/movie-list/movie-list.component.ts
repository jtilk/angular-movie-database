import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  @Output() event = new EventEmitter<void>();
  @Input() movieData: object[];
  movieGenre: any;

  constructor(private movieService: MovieService) {}

  getMovieData(searchQuery: string): any {
    this.movieService.getMovieData(searchQuery).then(response => {
      this.movieData = response.results;
    });
  }
  getMovieGenre(): any {
    this.movieService.getMovieGenre().then(response => {
      this.movieGenre = response.genres;
      console.log(this.movieGenre);
    });
}

  ngOnInit() {
  }
}
