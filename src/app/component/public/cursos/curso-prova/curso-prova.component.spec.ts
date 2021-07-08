import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoProvaComponent } from './curso-prova.component';

describe('CursoProvaComponent', () => {
  let component: CursoProvaComponent;
  let fixture: ComponentFixture<CursoProvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoProvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
