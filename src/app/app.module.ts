import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopArtistsComponent} from './top-artists/top-artists.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TopTracksComponent} from './top-tracks/top-tracks.component';
import {SearchArtistsComponent} from './search-artists/search-artists.component';
import {AlbumsComponent} from './albums/albums.component';
import {TracksComponent} from './tracks/tracks.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {SearchTracksComponent} from './search-tracks/search-tracks.component';
import {CountriesPipe} from './pipes/countries.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopArtistsComponent,
    TopTracksComponent,
    SearchArtistsComponent,
    AlbumsComponent,
    TracksComponent,
    MainNavComponent,
    SearchTracksComponent,
    CountriesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
