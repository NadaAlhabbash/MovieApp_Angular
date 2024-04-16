import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@components/home/home.component';
import { SearchComponent } from '@components/search/search.component';
import { DetailsComponent } from '@components/details/details.component';
import { WatchlistComponent } from '@components/watchlist/watchlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  {path: 'details/:id', component: DetailsComponent},
  {path: 'watchlist', component: WatchlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
