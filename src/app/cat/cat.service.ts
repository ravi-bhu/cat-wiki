import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeAll, Observable, toArray } from 'rxjs';
import { Cat, CatSummary } from './cat.model';
import { toCat } from './cat.util';

const API_BASE_URL = 'https://api.thecatapi.com/v1';

const TOP_TEN = ['beng', 'sava', 'norw', 'srex'];

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor(private httpClient: HttpClient) {}

  getTopTenSearchedCats(): Observable<CatSummary[]> {
    return this.httpClient
      .get<any[]>(`${API_BASE_URL}/images/search`, {
        params: {
          limit: 4,
          breed_ids: TOP_TEN.join(','),
        },
      })
      .pipe(
        mergeAll(),
        map(
          (data: any) =>
            ({
              id: data.id,
              breed: data.breeds[0].id,
              imageUrl: data.url,
              name: data.breeds[0].name,
              description: data.breeds[0].description,
            } as CatSummary)
        ),
        toArray()
      );
  }

  getCatDetails(breed: string): Observable<Cat> {
    return this.httpClient
      .get<any>(`${API_BASE_URL}/breeds/${breed}`)
      .pipe(map((response) => toCat(response, response.url)));
  }

  getCatPictures(breed: string, limit: number = 8) {
    return this.httpClient
      .get<any[]>(`${API_BASE_URL}/images/search`, {
        params: {
          breed_ids: breed,
          limit,
        },
      })
      .pipe(
        mergeAll(),
        map((res) => res.url),
        toArray()
      );
  }

  getCatImage(imageId: string) {
    return this.httpClient
      .get<any>(`${API_BASE_URL}/images/${imageId}`)
      .pipe(map((res) => res.url));
  }
}
