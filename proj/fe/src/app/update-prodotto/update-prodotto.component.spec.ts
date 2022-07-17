import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProdottoComponent } from './update-prodotto.component';

describe('UpdateProdottoComponent', () => {
  let component: UpdateProdottoComponent;
  let fixture: ComponentFixture<UpdateProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProdottoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
