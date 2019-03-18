import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopArtistsComponent} from './top-artists/top-artists.component';
import {TopTracksComponent} from './top-tracks/top-tracks.component';
import {SearchArtistsComponent} from './search-artists/search-artists.component';
import {AlbumsComponent} from './albums/albums.component';
import {TracksComponent} from './tracks/tracks.component';
import {SearchTracksComponent} from './search-tracks/search-tracks.component';

const routes: Routes = [

  {path: '', component: TopTracksComponent},
  {path: 'searchartist', component: SearchArtistsComponent},
  {path: 'searchtrack', component: SearchTracksComponent},
  {path: 'toptracks', component: TopTracksComponent},
  {path: 'topartists', component: TopArtistsComponent},
  {path: 'albums/:artist_id', component: AlbumsComponent},
  {path: 'albumtracks/:album_id', component: TracksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
