import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"

})

export class MovieService {

  resultsList: object[];
  watchList: object[];

  constructor(private http: HttpClient) {}

  getMovieData(searchQuery: string): any {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e5ae3d31b67ec5459b5a39058c5630cd&language=en-US&page=1`
      )
      .toPromise();
  }
}
