import { Component, OnInit } from "@angular/core";
import { MovieService } from "../Services/movie.service";
@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movieData: object[];
  movieGenre: any;

  constructor(private movieService: MovieService) {}

  getMovieData(searchQuery: string): any {
    console.log("Get Movie Data works (Movie-list component)");
    this.movieService.getMovieData("guardians").then(response => {
      this.movieData = response.results;
      console.log(this.movieData);
    });
  }
  getMovieGenre(): any {
    console.log("getMovieGenre works (Movie-list component)");
    this.movieService.getMovieGenre().then(response => {
      this.movieGenre = response.genres;
      console.log(this.movieGenre);
      // console.log(response.genres);
    });
  }

  getPopMovieData(): any {
    console.log("Get Pop Movie Data works (Movie-list component)");
    this.movieService.getPopMovieData().then(response => {
      this.movieData = response.results;
      console.log(this.movieData);
    });
  }

  ngOnInit() {
    console.log("Get Movie Data works (Movie-list component on init)");
    this.movieService.getMovieData("guardians").then(response => {
      this.movieData = response.results;
      console.log(this.movieData);
    });
    this.movieService.getMovieGenre().then(response => {
      this.movieGenre = response.genres;
      console.log(this.movieGenre);
    });
  }
}
