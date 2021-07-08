import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss']
})
export class FeedbackCardComponent implements OnInit {

  @Input() Descricao: string;
  @Input() User: any;

  constructor() { }

  ngOnInit(): void {
  }

}
