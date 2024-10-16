import { Component, computed, input, signal } from '@angular/core';
import { TechStackItem } from '../../models/tech-stack-item.model';

@Component({
  selector: 'app-tech-stack-item',
  templateUrl: './tech-stack-item.component.html',
  styleUrls: ['./tech-stack-item.component.sass'],
})
export class TechStackItemComponent {
  item = input.required<TechStackItem>();
  isTooltipVisible = signal<boolean>(false);
  tooltipActivated = signal<boolean>(false);

  experience = computed(() => {
    const duration = new Date().getFullYear() - this.item().since.getFullYear();
    return `+${duration} years`;
  });

  setMouseOver(): void {
    this.tooltipActivated.set(true);
    this.isTooltipVisible.set(true);
  }

  resetMouseOver(): void {
    this.isTooltipVisible.set(false);
  }
}
