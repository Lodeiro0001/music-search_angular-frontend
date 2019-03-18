import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public artist_id;
  public artist_name;
  public albums: object[];

  constructor(private apiService: ApiService,
              private readonly route: ActivatedRoute) {
  }

  getAlbums(artist_id: number) {
    this.apiService.getAlbums(artist_id).subscribe(
      result => {
        this.albums = result;
        this.artist_name = result[0].album.artist_name;
      },
      error => {
        console.log('No se puede listar los datos' + error);
      }
    );
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.artist_id = params.get('artist_id');
    });
    this.getAlbums(this.artist_id);

  }

}
