import { Component, HostListener } from '@angular/core';
import { appearAnimation } from '../../shared/utilities/animations';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss', 'contact-section.component.query.scss'],
  animations: [ appearAnimation ]
})
export class ContactSectionComponent {

  animations = { state: 'standBy', params: { startX: '0%', startY: '15%' }}
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    if (window.scrollY  > 2500 && this.animations.state !== 'in') {
      this.animations.state = 'in';
    }
  }
}
