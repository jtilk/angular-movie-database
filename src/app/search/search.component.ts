import { Component, OnInit } from "@angular/core";
import { MovieService } from "../Services/movie.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  //houses search-criteria component and displays search results in the form of movie-list
  searchQuery: string;
  constructor(private movieService: MovieService) {}

  ngOnInit() {}
}

// getMovieData(searchQuery: string): any {
//   console.log(searchQuery);
//   this.movieService.getMovieData(searchQuery).then(response => {
//     this.movieData = response.results;
//     console.log(this.movieData);
//   });
// }
