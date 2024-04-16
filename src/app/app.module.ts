import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '@environment/environment';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@components/home/home.component';
import { SliderComponent } from '@components/slider/slider.component';
import { ToggleTapsComponent } from '@components/toggle-taps/toggle-taps.component';
import { FooterComponent } from '@components/footer/footer.component';
import { SearchComponent } from '@components/search/search.component';
import { DetailsComponent } from '@components/details/details.component';
import { TruncateTextPipe } from '@pipes/custom-pipe.pipe';
import { MovieService } from '@services/Movie/movie.service';
import { WatchlistComponent } from '@components/watchlist/watchlist.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    ToggleTapsComponent,
    FooterComponent,
    SearchComponent,
    DetailsComponent,
    TruncateTextPipe,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: 'environment', useValue: environment },
    MovieService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
