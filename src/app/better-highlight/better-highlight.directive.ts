import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {

  @Input() defaultBgr    = 'transparent';
  @Input() highlightBgr  = 'blue';
  @Input() defaultText   = 'black';
  @Input() highlightText = 'white';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') textColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultBgr;
    this.textColor       = this.defaultText;
   }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightBgr;
    this.textColor       = this.highlightText;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultBgr;
    this.textColor       = this.defaultText;
  }
}
