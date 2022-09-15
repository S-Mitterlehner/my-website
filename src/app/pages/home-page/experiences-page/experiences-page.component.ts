import { Component, OnInit } from '@angular/core';
import { ChronologicalListItem } from 'src/app/models/chronological-list-item.model';
import { PersonalInfoService } from 'src/app/services/personal-info.service';

@Component({
  templateUrl: './experiences-page.component.html',
  styleUrls: ['./experiences-page.component.sass']
})
export class ExperiencesPageComponent implements OnInit {
  workingExperiences: ChronologicalListItem[] = [];

  constructor(private service: PersonalInfoService) { }

  ngOnInit(): void {
    this.workingExperiences = this.service.getWorkingExperiences();
  }

}
