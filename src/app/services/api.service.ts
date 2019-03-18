import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlApi = 'urlApiBackend';

  constructor(private httpClient: HttpClient) {
  }

  getArtists(name: string) {
    return this.httpClient.get<any>(this.urlApi + '/artist/' + name);
  }

  getTracks(title: string) {
    return this.httpClient.get<any>(this.urlApi + '/tracks/' + title);
  }

  getTopArtists() {
    return this.httpClient.get<any>(this.urlApi + '/topartists');
  }

  getTopTracks() {
    return this.httpClient.get<any>(this.urlApi + '/toptracks');
  }

  getAlbums(artist_id: number) {
    return this.httpClient.get<any>(this.urlApi + '/albums/' + artist_id);
  }

  getAlbumTracks(album_id: number) {
    return this.httpClient.get<any>(this.urlApi + '/albumtracks/' + album_id);
  }

  getLirycs(track_id: number) {
    return this.httpClient.get<any>(this.urlApi + '/lirycs/' + track_id);
  }
}
