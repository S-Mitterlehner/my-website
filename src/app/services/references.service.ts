import { Injectable } from '@angular/core';
import { HeroListItem } from '../models/hero-list-item.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReferencesService {
  constructor(private http: HttpClient) {}

  getReferences(): Observable<HeroListItem[]> {
    return this.http.get<HeroListItem[]>('assets/data/references.json');
  }
}
