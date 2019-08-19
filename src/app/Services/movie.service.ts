import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovieData(): any {
    this.http
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=e5ae3d31b67ec5459b5a39058c5630cd&language=en-US&query=guardians"
      )
      .toPromise();
  }
}
