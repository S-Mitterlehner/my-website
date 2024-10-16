import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass'],
})
export class PopupComponent implements OnInit {
  titleText = input<string | undefined>(undefined);
  closeRequested = output<void>();

  constructor() {}

  ngOnInit(): void {}

  requestClose(): void {
    this.closeRequested.emit();
  }
}
