import { Component, OnInit } from '@angular/core';
import {MovieService} from '../Services/movie.service';

@Component({
  selector: 'app-watchlist-list',
  templateUrl: './watchlist-list.component.html',
  styleUrls: ['./watchlist-list.component.css']
})
export class WatchlistListComponent implements OnInit {

  watchList: object[];

  constructor(private movieService: MovieService) { }

  onRemoveHandler(index: number): void {
    this.watchList.splice(index, 1);
  }

  ngOnInit() {
    this.watchList = this.movieService.watchList;
  }

}
