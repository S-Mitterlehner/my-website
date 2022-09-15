import { Component, Input, OnInit } from '@angular/core';
import { slideInFromLeft } from 'src/app/animations/slide-in';
import { ChronologicalDetails, ChronologicalListItem } from '../../models/chronological-list-item.model';

@Component({
  selector: 'app-chronological-list',
  templateUrl: './chronological-list.component.html',
  styleUrls: ['./chronological-list.component.sass'],
  animations: [
    slideInFromLeft
  ]
})
export class ChronologicalListComponent implements OnInit {
  @Input() items!: ChronologicalListItem[];
  @Input() allowDetails = false;
  itemList: ChronologicalListItem[] = [];
  detail: ChronologicalDetails | undefined = undefined;
  showPopup: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.itemList = this.items;
      this.detail = this.items[0].details;
    }, 1000);
  }

  getYearString(item: ChronologicalListItem ): string {
    if(item.to === undefined) {
      return item.from;
    } 

    return `${item.from} - ${item.to}`;
  }

  showDetails(details: ChronologicalDetails): void {
    this.detail = details;
    this.showPopup = true;
  }

  closePopup(){
    this.showPopup = false;
    this.detail = undefined;
  }
}
