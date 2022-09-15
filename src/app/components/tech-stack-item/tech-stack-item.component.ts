import { Component, Input } from '@angular/core';
import { KnowledgeLevel, TechItem, TechStackItem } from '../../models/tech-stack-item.model';

@Component({
  selector: 'app-tech-stack-item',
  templateUrl: './tech-stack-item.component.html',
  styleUrls: ['./tech-stack-item.component.sass']
})
export class TechStackItemComponent {
  @Input() item!: TechStackItem;
  isTooltipVisible = false;
  tooltipActivated = false;

  getExperience(): string {
    const duration = new Date().getFullYear() - this.item.since.getFullYear();
    return '+' + duration + ' years';
  }

  getLevel(): string {
    switch(this.item.level) {
      case KnowledgeLevel.BEGINNER: return 'Beginner';
      case KnowledgeLevel.ADVANCED: return 'Advanced';
      case KnowledgeLevel.PRO: return 'Pro';
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