import { Component, OnInit } from '@angular/core';
import { slideInFromLeft } from 'src/app/animations/slide-in';
import { HeroListItem } from 'src/app/models/hero-list-item.model';
import { ReferencesService } from 'src/app/services/references.service';

@Component({
  templateUrl: './reference-page.component.html',
  styleUrls: ['./reference-page.component.sass']
})
export class ReferencePageComponent implements OnInit {
  references: HeroListItem[] = [];

  constructor(private service: ReferencesService) { }

  ngOnInit(): void {
    this.references = this.service.getReferences();
  }

}
