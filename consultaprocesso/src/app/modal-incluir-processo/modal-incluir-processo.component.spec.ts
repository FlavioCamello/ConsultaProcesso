import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIncluirProcessoComponent } from './modal-incluir-processo.component';

describe('ModalIncluirProcessoComponent', () => {
  let component: ModalIncluirProcessoComponent;
  let fixture: ComponentFixture<ModalIncluirProcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIncluirProcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIncluirProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
