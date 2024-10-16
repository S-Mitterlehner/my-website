import { Component, input, OnInit, signal } from '@angular/core';
import { Themes, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  logoSource = input<string>('');
  transparentBackgroundOnTop = input<boolean>(false);
  showLogo = input<boolean>(false);

  isTransparent = signal<boolean>(true);
  isMenuOpen = signal<boolean>(false);

  //TODO: add nav animation

  constructor(public theme: ThemeService) {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.isTransparent.set(window.screenY === 0);
    });
  }

  toggleTheme(): void {
    if (this.theme.currentTheme === Themes.LIGHT) {
      this.theme.setTheme(Themes.DARK);
    } else {
      this.theme.setTheme(Themes.LIGHT);
    }
  }
}
