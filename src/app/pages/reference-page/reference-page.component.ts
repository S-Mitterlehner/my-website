import { Component, OnInit, signal } from '@angular/core';
import { provideTranslocoScope } from '@ngneat/transloco';
import { slideInFromLeft } from 'src/app/animations/slide-in';
import { HeroListItem } from 'src/app/models/hero-list-item.model';
import { ReferencesService } from 'src/app/services/references.service';

@Component({
  templateUrl: './reference-page.component.html',
  styleUrls: ['./reference-page.component.sass'],
})
export class ReferencePageComponent implements OnInit {
  references = signal<HeroListItem[]>([]);

  constructor(private service: ReferencesService) {}

  ngOnInit(): void {
    this.service.getReferences().subscribe((data) => this.references.set(data));
  }
}
