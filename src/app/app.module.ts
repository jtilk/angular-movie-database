import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MovieService } from "./Services/movie.service";
import { RoutingService } from "./Services/routing.service";
import { AppComponent } from "./app.component";
import { SearchCriteriaComponent } from "./movie-master/search-criteria/search-criteria.component";
import { MovieListComponent } from "./movie-master/movie-list/movie-list.component";
import { WatchlistPageComponent } from "./movie-master/watchlist-page/watchlist-page.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MovieMasterComponent } from "./movie-master/movie-master.component";
import { RouterModule, Routes } from "@angular/router";

let appRoutes: Routes = [
  { path: "movieMaster", component: MovieMasterComponent },
  { path: "watchList", component: MovieMasterComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    MovieListComponent,
    WatchlistPageComponent,
    MovieMasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService, RoutingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
