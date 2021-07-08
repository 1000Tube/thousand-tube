import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  animations: [
    trigger('toggleHeight', [
      state('hide', style({
          height: '0px',
          opacity: '0',
          overflow: 'hidden'
      })),
      state('show', style({
          height: '*',
          padding: '20px 35px 0px',
          opacity: '1'
      })),
      transition('hide => show', animate('200ms ease-in')),
      transition('show => hide', animate('200ms ease-out'))
    ])
  ],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() Titulo: string;
  @Input() isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  OpenOrClose(){
    this.isOpen = !this.isOpen;
  }

}
