import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // houses search-criteria component and displays search results in the form of movie-list
  movieData: object[];
  constructor(private movieService: MovieService) {}

  getMovieData(form: NgForm): any {
    this.movieService.getMovieData(form.value.searchTerm).then(response => {
      this.movieData = response.results;
    });
  }

  ngOnInit() {
  }

}
