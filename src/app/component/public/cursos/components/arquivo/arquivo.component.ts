import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arquivo',
  templateUrl: './arquivo.component.html',
  styleUrls: ['./arquivo.component.scss']
})
export class ArquivoComponent implements OnInit {

  iconVideo = "assets/icons/icons_video.svg";
  iconFile = "assets/icons/icon_file.svg";

  @Input() Tipo: string;
  @Input() Url: string;
  @Input() Titulo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
