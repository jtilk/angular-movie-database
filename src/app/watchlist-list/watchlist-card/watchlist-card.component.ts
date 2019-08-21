import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MovieService} from '../../Services/movie.service';

@Component({
  selector: 'app-watchlist-card',
  templateUrl: './watchlist-card.component.html',
  styleUrls: ['./watchlist-card.component.css']
})
export class WatchlistCardComponent implements OnInit {
  @Input() movie: any;
  @Output() onRemove = new EventEmitter<any>();
  @Input() movieIndex: number;
  movieDetails: any;
  constructor(private movieService: MovieService) { }

  removeFromWatchlist(index: number) {
    this.onRemove.emit(index);
  }

  ngOnInit() {
    this.movieService.getMovieDetails(this.movie.id).then(response => {
      this.movieDetails = response ;
      console.log(this.movieDetails);
    });
  }

}
