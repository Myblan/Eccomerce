import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoDetailsComponent } from './prodotto-details.component';

describe('ProdottoDetailsComponent', () => {
  let component: ProdottoDetailsComponent;
  let fixture: ComponentFixture<ProdottoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdottoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
