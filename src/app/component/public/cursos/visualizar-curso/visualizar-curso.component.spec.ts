import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarCursoComponent } from './visualizar-curso.component';

describe('VisualizarCursoComponent', () => {
  let component: VisualizarCursoComponent;
  let fixture: ComponentFixture<VisualizarCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
