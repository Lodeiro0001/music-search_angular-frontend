import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.css']
})
export class TopArtistsComponent implements OnInit {

  public artists: object[];

  constructor(private apiService: ApiService,
              private router: Router) { }

  getTopArtists() {
    this.apiService.getTopArtists().subscribe(
      result => { this.artists = result.data; },
      error => { console.log('No se puede listar los datos' + error); }
    );
  }

  ngOnInit() {
    this.getTopArtists();
  }

}
