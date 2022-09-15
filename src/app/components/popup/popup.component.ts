import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent implements OnInit {
  @Input() titleText: string | undefined = undefined;
  @Output() closeRequested = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  requestClose(): void {
    this.closeRequested.emit();
  }
}
