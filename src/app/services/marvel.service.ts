import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/marvel.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MarvelService {
  private baseUrl: string =
    'https://gateway.marvel.com:443/v1/public/characters?';
  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<Heroe> {
    return this.httpClient.get<Heroe>(
      `${this.baseUrl}ts=1000&apikey=510c5c7672e863155540c01e26a71ebb&hash=cf95359ee38358dab71af57b9e715e85&limit=27&offset=200`
    );
  }
}
