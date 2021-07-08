import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-visualizar-curso',
  templateUrl: './visualizar-curso.component.html',
  styleUrls: ['./visualizar-curso.component.scss']
})
export class VisualizarCursoComponent implements OnInit, OnDestroy {

  inscricao: Subscription;
  Curso: any;

  sources: Plyr.Source[];
  options: Plyr.Options =
  {
    autoplay: false,
    invertTime: false,
    settings: ['quality'],
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
    captions: {active: true, update: true, language: 'pt'},
    youtube: {autoplay: 1, enablejsapi: 1},
    vimeo: {autoplay: 1}
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const data = JSON.parse(atob(params.slug));
        this.Curso = data.curso;
        const selecionado = this.Curso.Aulas[data.x].Files[data.y];
        this.sources = [
          {
            src: selecionado.Url,
            provider: 'html5'
          },
        ];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
