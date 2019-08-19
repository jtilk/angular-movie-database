import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MovieService } from "./Services/movie.service";
import { RoutingService } from "./Services/routing.service";
import { AppComponent } from "./app.component";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { WatchlistPageComponent } from "./watchlist-page/watchlist-page.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    MovieListComponent,
    WatchlistPageComponent
  ],
  imports: [BrowserModule, MovieService, RoutingService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
