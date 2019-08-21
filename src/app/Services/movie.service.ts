import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { match } from "minimatch";
import { FormsModule, NgForm } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  resultsList: object[] = [];
  watchList: object[] = [];
  genreList: object[] = [];
  filterList: object[] = [];

  constructor(private http: HttpClient) {}

  getMovieData(searchResult: string): any {
    return this.http
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=e5ae3d31b67ec5459b5a39058c5630cd&language=en-US&query=${searchResult}`
      )
      .toPromise();
  }

  getPopMovieData(): any {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e5ae3d31b67ec5459b5a39058c5630cd&language=en-US&page=1`
      )
      .toPromise();
  }

  getMovieDetails(id: number): any {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e5ae3d31b67ec5459b5a39058c5630cd&language=en-US`
      )
      .toPromise();
  }
  getMovieGenre(): any {
    return this.http
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=e5ae3d31b67ec5459b5a39058c5630cd&language=en-US"
      )
      .toPromise();
  }

  filterMovies(form: NgForm): any {
    console.log(form);
    this.filterList = this.resultsList.filter(
      movie => movie["genre_ids"][0] === form.options["name"]
    );
    console.log(this.filterList);
  }
}
