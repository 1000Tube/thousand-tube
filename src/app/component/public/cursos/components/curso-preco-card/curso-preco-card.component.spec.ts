import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoPrecoCardComponent } from './curso-preco-card.component';

describe('CursoPrecoCardComponent', () => {
  let component: CursoPrecoCardComponent;
  let fixture: ComponentFixture<CursoPrecoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoPrecoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoPrecoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
