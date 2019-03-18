import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-artists',
  templateUrl: './search-artists.component.html',
  styleUrls: ['./search-artists.component.css']
})
export class SearchArtistsComponent implements OnInit {

  public name: string;
  public artists: object[];

  constructor(private apiService: ApiService,
              private router: Router) { }

  searchArtists(name: string) {
    this.apiService.getArtists(name).subscribe(
      result => {
        this.artists = result;
        },
      error => { console.log('No se puede listar los datos' + error); }

    );
  }

  onSubmit() {
    this.searchArtists(this.name);
  }

  ngOnInit() {}

}
