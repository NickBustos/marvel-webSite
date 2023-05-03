import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/marvel.interface';
import { Observable } from 'rxjs';
import { Comic } from '../interfaces/comicListado.interface';
import { ComicIndividual } from '../interfaces/comicIndividual.interface';

@Injectable({ providedIn: 'root' })
export class MarvelService {
  private baseUrlHeroe: string =
    'https://gateway.marvel.com:443/v1/public/characters';
  private baseUrlComic: string =
    'https://gateway.marvel.com:443/v1/public/comics';
  private apiKey =
    '510c5c7672e863155540c01e26a71ebb&hash=cf95359ee38358dab71af57b9e715e85';

  private page: number = 0;
  constructor(private httpClient: HttpClient) {}

  getHeroes(numPage: number): Observable<Heroe> {
    return this.httpClient.get<Heroe>(
      `${this.baseUrlHeroe}?ts=1000&apikey=${this.apiKey}&limit=28&offset=${numPage}`
    );
  }

  getHeroe(idHeroe: string): Observable<Heroe> {
    return this.httpClient.get<Heroe>(
      `${this.baseUrlHeroe}/${idHeroe}?ts=1000&apikey=${this.apiKey}`
    );
  }

  searchHeroe(param: string) {
    return this.httpClient.get<Heroe>(
      `${this.baseUrlHeroe}?ts=1000&apikey=${this.apiKey}&nameStartsWith=${param}&limit=10`
    );
  }

  searchHeroebyName(name: string): Observable<Heroe> {
    return this.httpClient.get<Heroe>(
      `${this.baseUrlComic}?name=${name}&ts=1000&apikey=${this.apiKey}`
    );
  }

  getComics(numPage: number): Observable<Comic> {
    return this.httpClient.get<Comic>(
      `${this.baseUrlComic}?format=comic&ts=1000&apikey=${this.apiKey}&limit=28&offset=${numPage}&orderBy=focDate`
    );
  }
  getComic(idComic: string): Observable<ComicIndividual> {
    return this.httpClient.get<ComicIndividual>(
      `${this.baseUrlComic}/${idComic}?&ts=1000&apikey=${this.apiKey}`
    );
  }
}
