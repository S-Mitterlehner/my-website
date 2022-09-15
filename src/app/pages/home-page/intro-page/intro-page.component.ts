import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.sass']
})
export class IntroPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getYearAmount(year: number, month = -1): number {
    const current = new Date();
    let calcYear = current.getFullYear();
    const currentMonth = current.getMonth();

    if(currentMonth < month) {
      calcYear--;
    }

    return calcYear - year;
  }

}
