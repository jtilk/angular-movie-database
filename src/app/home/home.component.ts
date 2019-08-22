import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // landing page that displays a movie list populated with Popular movies

  movieData: object[];

  constructor(private movieService: MovieService) { }

  getPopMovieData(): any {
    console.log('Get Pop Movie Data works (Movie-list component)');
    this.movieService.getPopMovieData().then(response => {
      this.movieData = response.results ;
    });
  }

  ngOnInit() {
  }

}
