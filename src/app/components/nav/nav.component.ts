import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  @Output() itemClicked = new EventEmitter();

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
    
  }

}
