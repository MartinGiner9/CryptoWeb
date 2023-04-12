import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocryptoComponent } from './listadocrypto.component';

describe('ListadocryptoComponent', () => {
  let component: ListadocryptoComponent;
  let fixture: ComponentFixture<ListadocryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadocryptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadocryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
