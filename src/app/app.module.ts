import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MovieService } from "./Services/movie.service";
import { RoutingService } from "./Services/routing.service";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MovieCardComponent } from "./movie-list/movie-card/movie-card.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { TopnavComponent } from "./topnav/topnav.component";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { WatchlistPageComponent } from "./watchlist-page/watchlist-page.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";
import { PopMovieListComponent } from './pop-movie-list/pop-movie-list.component';
import { PopMovieCardComponent } from './pop-movie-list/pop-movie-card/pop-movie-card.component';

let appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "movie-list", component: MovieListComponent },
  { path: "movie-card", component: MovieCardComponent },
  { path: "search", component: SearchComponent },
  { path: "search-criteria", component: SearchCriteriaComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "watch-list", component: WatchlistPageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    MovieListComponent,
    WatchlistPageComponent,
    MovieCardComponent,
    SidenavComponent,
    TopnavComponent,
    HomeComponent,
    SearchComponent,
    PopMovieListComponent,
    PopMovieCardComponent
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
