import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  public album_id;
  public album_name;
  public artist_name;
  public tracks: object[];

  constructor(private apiService: ApiService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) {
  }

  getAlbumTracks(album_id: number) {
    this.apiService.getAlbumTracks(album_id).subscribe(
      result => {
        this.tracks = result;
        this.artist_name = result[0].track.artist_name;
        this.album_name = result[0].track.album_name;
      },
      error => {
        console.log('No se puede listar los datos' + error);
      }
    );
  }

  getLyrics(track_id: number, indice: number) {
    this.apiService.getLirycs(track_id).subscribe(
      result => {
        if (result != null) {
          Object.defineProperty(this.tracks[indice], 'lyrics', {
            value: result.lyrics_body,
            writable: true,
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(this.tracks[indice], 'explicit', {
            value: result.explicit,
            writable: true,
            enumerable: true,
            configurable: true
          });
        } else {
          Object.defineProperty(this.tracks[indice], 'lyrics', {
            value: 'Letra no disponible',
            writable: true,
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(this.tracks[indice], 'explicit', {
            value: 0,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      },
      error => {
        console.log('yea' + error);
      }
    );
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.album_id = params.get('album_id');
    });
    this.getAlbumTracks(this.album_id);

  }

}
