import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetalheComponent } from './item-detalhe.component';

describe('ItemDetalheComponent', () => {
  let component: ItemDetalheComponent;
  let fixture: ComponentFixture<ItemDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
