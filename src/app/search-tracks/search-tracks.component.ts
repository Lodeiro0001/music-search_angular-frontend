import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-tracks',
  templateUrl: './search-tracks.component.html',
  styleUrls: ['./search-tracks.component.css']
})
export class SearchTracksComponent implements OnInit {

  public title: string;
  public tracks: object[];

  constructor(private apiService: ApiService,
              private router: Router) { }

  searchTracks(title: string) {
    this.apiService.getTracks(title).subscribe(
      result => {
        this.tracks = result;
      },
      error => { console.log('No se puede listar los datos' + error); }

    );
  }

  getLyrics(track_id: number, indice: number) {
    console.log(track_id, indice)
    this.apiService.getLirycs(track_id).subscribe(
      result => {
        if (result != null){
          Object.defineProperty(this.tracks[indice], 'lyrics', {value : result.lyrics_body,
            writable : true,
            enumerable : true,
            configurable : true});
          Object.defineProperty(this.tracks[indice], 'explicit', {value : result.explicit,
            writable : true,
            enumerable : true,
            configurable : true});
        } else {
          Object.defineProperty(this.tracks[indice], 'lyrics', {value : 'Letra no disponible',
            writable : true,
            enumerable : true,
            configurable : true});
          Object.defineProperty(this.tracks[indice], 'explicit', {value : 0,
            writable : true,
            enumerable : true,
            configurable : true});
        }
      },
      error => { console.log('No se puede listar los datos' + error); }
    );
  }

  onSubmit() {
    this.searchTracks(this.title);
  }

  ngOnInit() {}

}
