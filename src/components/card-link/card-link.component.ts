import { Component, Input, HostListener, ContentChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-link',
  imports: [CommonModule],
  templateUrl: './card-link.component.html',
  styleUrl: './card-link.component.css',
  standalone: true
})
export class CardLinkComponent {
  @Input() link: string = '';
  @Input() title: string = '';
  @ContentChild('[card-link__content]') cardLinkContent!: ElementRef;

  showPopover: boolean = false;

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    event.preventDefault();
    this.showPopover = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.showPopover = false;
  }
}
