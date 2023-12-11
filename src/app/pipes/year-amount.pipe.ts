import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearAmount',
})
export class YearAmountPipe implements PipeTransform {
  transform(value: { year: number; month: number }): number {
    const current = new Date();
    let calcYear = current.getFullYear();
    const currentMonth = current.getMonth();

    if (currentMonth < value.month) {
      calcYear--;
    }

    return calcYear - value.year;
  }
}
