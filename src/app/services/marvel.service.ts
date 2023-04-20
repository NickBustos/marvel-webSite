import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/marvel.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MarvelService {
  private baseUrl: string =
    'https://gateway.marvel.com:443/v1/public/characters';

  private apiKey =
    '510c5c7672e863155540c01e26a71ebb&hash=cf95359ee38358dab71af57b9e715e85';

  private page: number = 0;
  constructor(private httpClient: HttpClient) {}

  getHeroes(numPage: number): Observable<Heroe> {
    return this.httpClient.get<Heroe>(
      `${this.baseUrl}?ts=1000&apikey=${this.apiKey}&limit=28&offset=${numPage}`
    );
  }

  getHeroe(idHeroe: string): Observable<Heroe> {
    return this.httpClient.get<Heroe>(
      `${this.baseUrl}/${idHeroe}?ts=1000&apikey=${this.apiKey}`
    );
  }

  searchHeroe(param: string) {
    return this.httpClient.get<Heroe>(
      `${this.baseUrl}?ts=1000&apikey=${this.apiKey}&nameStartsWith=${param}&limit=10`
    );
  }
}
