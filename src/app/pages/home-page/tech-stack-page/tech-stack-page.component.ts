import { Component, OnInit } from '@angular/core';
import { TechStackCategory } from 'src/app/models/tech-stack-item.model';
import { PersonalInfoService } from 'src/app/services/personal-info.service';

@Component({
  templateUrl: './tech-stack-page.component.html',
  styleUrls: ['./tech-stack-page.component.sass']
})
export class TechStackPageComponent implements OnInit {
  techStack: TechStackCategory[] = [];
  
  constructor(private service: PersonalInfoService) { }

  ngOnInit(): void {
    this.techStack = this.service.getTechStack();
  }

}
