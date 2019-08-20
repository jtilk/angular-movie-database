import { Component } from "@angular/core";
// import { Router } from "@angular/router";
import { RoutingService } from "./Services/routing.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-project";
  constructor(private routingService: RoutingService) {}

  navToHome(): void {
    this.routingService.navToHome();
  }
  navToWatchList(): void {
    this.routingService.navToWatchList();
  }
  navToMovieList(): void {
    this.routingService.navToMovieList();
  }
  navToMovieCard(): void {
    this.routingService.navToMovieCard();
  }
  navToSearch(): void {
    this.routingService.navToSearch();
  }
}
