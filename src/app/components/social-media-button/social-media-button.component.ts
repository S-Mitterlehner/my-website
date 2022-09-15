import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-media-button',
  templateUrl: './social-media-button.component.html',
  styleUrls: ['./social-media-button.component.sass']
})
export class SocialMediaButtonComponent {
  @Input() url!: string;
  @Input() type!: SocialMediaChannels | string;

  getText(): string {
    switch(this.type){
      case SocialMediaChannels.LinkedIn: return 'LinkedIn';
      case SocialMediaChannels.XING: return 'XING';
      case SocialMediaChannels.Twitter: return 'Twitter';
      case SocialMediaChannels.Email: return 'E-Mail';
      default: throw new Error("undefined social-media type");
      
    }
  }
}


export enum SocialMediaChannels {
  LinkedIn = 'linked-in',
  XING = 'xing',
  Twitter = 'twitter',
  Email = 'mail'
}