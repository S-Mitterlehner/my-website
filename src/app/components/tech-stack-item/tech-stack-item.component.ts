import { Component, Input, OnChanges } from '@angular/core';
import {
  KnowledgeLevel,
  TechItem,
  TechStackItem,
} from '../../models/tech-stack-item.model';
import { SimpleChanges } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-tech-stack-item',
  templateUrl: './tech-stack-item.component.html',
  styleUrls: ['./tech-stack-item.component.sass'],
})
export class TechStackItemComponent implements OnChanges {
  @Input() item!: TechStackItem;
  isTooltipVisible = false;
  tooltipActivated = false;

  experience = signal('');

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      const duration = new Date().getFullYear() - this.item.since.getFullYear();
      this.experience.set('+' + duration + ' years');
    }
  }

  setMouseOver(): void {
    this.tooltipActivated = true;
    this.isTooltipVisible = true;
  }

  resetMouseOver(): void {
    this.isTooltipVisible = false;
  }
}
