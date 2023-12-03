import { Component, OnInit, signal } from '@angular/core';
import { LangDefinition, TranslocoService } from '@ngneat/transloco';

const LANGUAGE_KEY = 'language';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.sass'],
})
export class LanguageSelectionComponent implements OnInit {
  storage = localStorage;
  languages = signal<LangDefinition[]>([]);

  get activeLanguage() {
    return this.translocoService.getActiveLang();
  }

  constructor(private translocoService: TranslocoService) {}

  ngOnInit() {
    const l = this.translocoService.getAvailableLangs();
    this.languages.set(l as LangDefinition[]);

    const activeLang = this.storage.getItem(LANGUAGE_KEY);
    if (activeLang) {
      this.setLanguage(activeLang);
    }
  }

  setLanguage(language: string) {
    this.translocoService.setActiveLang(language);
    this.storage.setItem(LANGUAGE_KEY, language);
  }
}
