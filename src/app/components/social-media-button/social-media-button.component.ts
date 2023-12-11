import { signal } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-media-button',
  templateUrl: './social-media-button.component.html',
  styleUrls: ['./social-media-button.component.sass'],
})
export class SocialMediaButtonComponent implements OnChanges {
  @Input() url!: string;
  @Input() type!: SocialMediaChannels | string;

  text = signal('');

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type']) {
      switch (this.type) {
        case SocialMediaChannels.LinkedIn:
          this.text.set('LinkedIn');
          break;
        case SocialMediaChannels.XING:
          this.text.set('XING');
          break;
        case SocialMediaChannels.Twitter:
          this.text.set('Twitter');
          break;
        case SocialMediaChannels.Email:
          this.text.set('E-Mail');
          break;
        case SocialMediaChannels.GitHub:
          this.text.set('GitHub');
          break;
        default:
          throw new Error('undefined social-media type');
      }
    }
  }
}

export enum SocialMediaChannels {
  LinkedIn = 'linked-in',
  XING = 'xing',
  Twitter = 'twitter',
  Email = 'mail',
  GitHub = 'github',
}
