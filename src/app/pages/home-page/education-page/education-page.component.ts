import { Component, OnInit } from '@angular/core';
import { ChronologicalListItem } from 'src/app/models/chronological-list-item.model';
import { PersonalInfoService } from 'src/app/services/personal-info.service';

@Component({
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.sass']
})
export class EducationPageComponent implements OnInit {
  educations: ChronologicalListItem[] = [];

  constructor(private service: PersonalInfoService) { }

  ngOnInit(): void {
    this.educations = this.service.getEducation();
  }

}
