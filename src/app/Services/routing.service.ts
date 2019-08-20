import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class RoutingService {
  constructor(private router: Router) {}

  navToMaster(): void {
    this.router.navigate(["movieMaster"]);
  }
  navToWatchList(): void {
    this.router.navigate(["watchList"]);
  }
  navToLanding(): void {
    this.router.navigate(["landingPage"]);
  }
  navToMovieList(): void {
    this.router.navigate(["movieList"]);
  }
  navToMovieCard(): void {
    this.router.navigate(["movieCard"]);
  }
}
