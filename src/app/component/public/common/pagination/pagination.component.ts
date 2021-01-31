import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange = new EventEmitter<number>();
  @Output() pageBoundsCorrection: EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
  }

}
