import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../Services/movie.service";
@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movieData: any;
  movieGenre: any;
  constructor(private movieService: MovieService) {}

  getMovieData(searchResult: string): any {
    console.log("Get Movie Data works (Movie-list component)");
    this.movieService.getMovieData(searchResult).then(response => {
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

  ngOnInit() {}
}
