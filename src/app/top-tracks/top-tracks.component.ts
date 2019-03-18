import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.css']
})
export class TopTracksComponent implements OnInit {

  public tracks: object[];

  constructor(private apiService: ApiService,
              private router: Router) {
  }

  getTopTracks() {
    this.apiService.getTopTracks().subscribe(
      result => {
        this.tracks = result.data;
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
        console.log('No se puede listar los datos' + error);
      }
    );
  }

  ngOnInit() {
    this.getTopTracks();
  }

}
