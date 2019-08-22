import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  constructor(private router: Router) {}

  navToHome(): void {
    this.router.navigate(['home']);
  }
  navToWatchList(): void {
    this.router.navigate(['watch-list']);
  }
  navToSearch(): void {
    this.router.navigate(['search']);
  }
  navToMovieList(): void {
    this.router.navigate(['movie-list']);
  }
  navToMovieCard(): void {
    this.router.navigate(['movie-card']);
  }
}
