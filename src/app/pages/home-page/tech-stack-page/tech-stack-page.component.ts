import { Component, OnInit, signal } from '@angular/core';
import { provideTranslocoScope } from '@ngneat/transloco';
import { TechStackCategory } from 'src/app/models/tech-stack-item.model';
import { PersonalInfoService } from 'src/app/services/personal-info.service';

@Component({
  templateUrl: './tech-stack-page.component.html',
  styleUrls: ['./tech-stack-page.component.sass'],
})
export class TechStackPageComponent implements OnInit {
  techStack = signal<TechStackCategory[]>([]);

  constructor(private service: PersonalInfoService) {}

  ngOnInit(): void {
    this.service.getTechStack().subscribe((data) => this.techStack.set(data));
  }
}
