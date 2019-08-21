import { Component, OnInit, Input } from '@angular/core';
import {MovieService} from '../../Services/movie.service';

@Component({
  selector: 'app-pop-movie-card',
  templateUrl: './pop-movie-card.component.html',
  styleUrls: ['./pop-movie-card.component.css']
})
export class PopMovieCardComponent implements OnInit {
  @Input() movie: any;
  movieDetails: any;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovieDetails(this.movie.id).then(response => {
      this.movieDetails = response ;
      console.log(this.movieDetails);
    });
  }

}
