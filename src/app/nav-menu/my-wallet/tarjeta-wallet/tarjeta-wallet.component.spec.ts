import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaWalletComponent } from './tarjeta-wallet.component';

describe('TarjetaWalletComponent', () => {
  let component: TarjetaWalletComponent;
  let fixture: ComponentFixture<TarjetaWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
