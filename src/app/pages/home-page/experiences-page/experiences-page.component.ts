import { Component, OnInit, signal } from '@angular/core';
import { provideTranslocoScope } from '@ngneat/transloco';
import { ChronologicalListItem } from 'src/app/models/chronological-list-item.model';
import { PersonalInfoService } from 'src/app/services/personal-info.service';

@Component({
  templateUrl: './experiences-page.component.html',
  styleUrls: ['./experiences-page.component.sass'],
})
export class ExperiencesPageComponent implements OnInit {
  workingExperiences = signal<ChronologicalListItem[]>([]);

  constructor(private service: PersonalInfoService) {}

  ngOnInit(): void {
    this.service
      .getWorkingExperiences()
      .subscribe((data) => this.workingExperiences.set(data));
  }
}
