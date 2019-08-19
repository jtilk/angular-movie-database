import { Component, OnInit } from "@angular/core";
import { MovieService } from "../Services/movie.service";
@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movieData: any;
  constructor(private movieService: MovieService) {}

  getMovieData(): any {
    console.log("Get Movie Data works (Movie-list component)");
    this.movieService.getMovieData().then(response => {
      this.movieData = response.data;
    });
  }

  ngOnInit() {
    console.log("Get Movie Data works (Movie-list component)");
    this.movieService.getMovieData().then(response => {
      this.movieData = response.data;
    });
  }
}
