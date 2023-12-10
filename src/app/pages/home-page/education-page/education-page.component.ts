import { Component, OnInit, signal } from '@angular/core';
import { provideTranslocoScope } from '@ngneat/transloco';
import { ChronologicalListItem } from 'src/app/models/chronological-list-item.model';
import { PersonalInfoService } from 'src/app/services/personal-info.service';

@Component({
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.sass'],
})
export class EducationPageComponent implements OnInit {
  educations = signal<ChronologicalListItem[]>([]);

  constructor(private service: PersonalInfoService) {}

  ngOnInit(): void {
    this.service.getEducation().subscribe((data) => this.educations.set(data));
  }
}
