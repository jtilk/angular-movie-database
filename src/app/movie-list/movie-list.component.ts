import { Component, OnInit } from "@angular/core";
import { MovieService } from "../Services/movie.service";
import { format } from "util";
import { FormsModule, NgForm } from "@angular/forms";
@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movieData: object[];
  movieGenre: object[];
  resultsList: object[];
  filteredMovies: object[];
  genreName: string;

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
  filterMovies(genreForm: NgForm) {
    // for (let movie of this.movieData) {
    //   console.log(movie);
    //   for (let genre of this.movieGenre) {
    //     console.log(genre);
    //     if (movie.genre_ids[0] === genre.id) {
    //       console.log(movie.genre.ids[0]);
    //     }
    //   }
    this.movieService.filterMovies(genreForm);

    // console.log("Filter movie is working");
    // console.log(this.filteredMovies);
    // return this.filteredMovies;
  }

  // filterMovies(): any {
  //   // !This function needs to iterate through the current array and compare the first id# to the genre array
  //   // !If it finds a match, it pushes that item into a new array to display
  //   for (let movie of this.resultsList) {
  //     if (movie.genre_ids[0] === this.genreList.id.value) {
  //       this.filterList.push(movie);
  //     }
  //   }
  // }

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
