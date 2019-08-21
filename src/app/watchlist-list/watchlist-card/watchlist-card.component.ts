import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from '../../Services/movie.service';

@Component({
  selector: 'app-watchlist-card',
  templateUrl: './watchlist-card.component.html',
  styleUrls: ['./watchlist-card.component.css']
})
export class WatchlistCardComponent implements OnInit {
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
