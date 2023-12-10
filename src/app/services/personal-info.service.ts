import { Injectable } from '@angular/core';
import { ChronologicalListItem } from '../models/chronological-list-item.model';
import {
  KnowledgeLevel,
  TechStackCategory,
} from '../models/tech-stack-item.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonalInfoService {
  constructor(private http: HttpClient) {}

  getWorkingExperiences(): Observable<ChronologicalListItem[]> {
    return this.http.get<ChronologicalListItem[]>(
      'assets/data/experience.json'
    );
  }

  getEducation(): Observable<ChronologicalListItem[]> {
    return this.http.get<ChronologicalListItem[]>('assets/data/education.json');
  }

  getTechStack(): Observable<TechStackCategory[]> {
    return this.http
      .get<TechStackCategory[]>('assets/data/tech-stack.json')
      .pipe(
        map((data) => {
          data.forEach((cat) => {
            cat.items.forEach((item) => {
              item.level =
                KnowledgeLevel[
                  item.level as any as keyof typeof KnowledgeLevel
                ];
              item.since = new Date(item.since);
            });
          });
          return data;
        })
      );
  }
}
