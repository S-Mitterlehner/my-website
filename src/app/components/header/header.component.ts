import { Component, Input, OnInit } from '@angular/core';
import { Themes, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() logoSource!: string; 
  @Input() transparentBackgroundOnTop = false;
  @Input() showLogo = false;
  isTransparent = true;
  isMenuOpen = false;

  //TODO: add nav animation
  
  constructor(public theme: ThemeService) { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.isTransparent = window.screenY === 0;
    })
  }

  toggleTheme(): void {
    if(this.theme.currentTheme === Themes.LIGHT){
      this.theme.setTheme(Themes.DARK);
    } else {
      this.theme.setTheme(Themes.LIGHT);
    }
    
  }
}
