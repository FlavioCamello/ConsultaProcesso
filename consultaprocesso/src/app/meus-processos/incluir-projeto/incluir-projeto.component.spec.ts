import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirProjetoComponent } from './incluir-projeto.component';

describe('IncluirProjetoComponent', () => {
  let component: IncluirProjetoComponent;
  let fixture: ComponentFixture<IncluirProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
