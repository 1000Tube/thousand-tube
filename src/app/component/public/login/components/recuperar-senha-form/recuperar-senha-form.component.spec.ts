import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarSenhaFormComponent } from './recuperar-senha-form.component';

describe('RecuperarSenhaFormComponent', () => {
  let component: RecuperarSenhaFormComponent;
  let fixture: ComponentFixture<RecuperarSenhaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarSenhaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarSenhaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
