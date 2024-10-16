import { computed, input } from '@angular/core';
import { Component } from '@angular/core';

export enum SocialMediaChannels {
  LinkedIn = 'linked-in',
  XING = 'xing',
  Twitter = 'twitter',
  Email = 'mail',
  GitHub = 'github',
}

@Component({
  selector: 'app-social-media-button',
  templateUrl: './social-media-button.component.html',
  styleUrls: ['./social-media-button.component.sass'],
})
export class SocialMediaButtonComponent {
  url = input.required<string>();
  type = input.required<SocialMediaChannels | string>();

  text = computed(() => {
    switch (this.type()) {
      case SocialMediaChannels.LinkedIn:
        return 'LinkedIn';
      case SocialMediaChannels.XING:
        return 'XING';
      case SocialMediaChannels.Twitter:
        return 'Twitter';
      case SocialMediaChannels.Email:
        return 'E-Mail';
      case SocialMediaChannels.GitHub:
        return 'GitHub';
      default:
        throw new Error('undefined social-media type');
    }
  });
}
