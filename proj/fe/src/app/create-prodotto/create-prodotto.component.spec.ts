import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProdottoComponent } from './create-prodotto.component';

describe('CreateProdottoComponent', () => {
  let component: CreateProdottoComponent;
  let fixture: ComponentFixture<CreateProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProdottoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
