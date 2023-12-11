import { Component, Input, OnInit } from '@angular/core';
import { slideInFromLeft } from 'src/app/animations/slide-in';
import {
  ChronologicalDetails,
  ChronologicalListItem,
} from '../../models/chronological-list-item.model';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-chronological-list',
  templateUrl: './chronological-list.component.html',
  styleUrls: ['./chronological-list.component.sass'],
  animations: [slideInFromLeft],
})
export class ChronologicalListComponent implements OnInit {
  @Input() items!: ChronologicalListItem[];
  @Input() allowDetails = false;
  itemList: ChronologicalListItem[] = [];
  detail: ChronologicalDetails | undefined = undefined;
  showPopup: boolean = false;

  constructor(private translator: TranslocoService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.itemList = this.items;
      this.detail = this.items[0].details;
    }, 1000);
  }

  getYearString(item: ChronologicalListItem): string {
    let fromStr =
      item.from === 'TODAY'
        ? this.translator.translate('general.today')
        : item.from;
    if (item.to === undefined) {
      return fromStr;
    }
    let toStr =
      item.to === 'TODAY'
        ? this.translator.translate('general.today')
        : item.to;

    return `${fromStr} - ${toStr}`;
  }

  showDetails(details: ChronologicalDetails): void {
    this.detail = details;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.detail = undefined;
  }
}
