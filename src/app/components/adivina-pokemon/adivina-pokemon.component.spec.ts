import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaPokemonComponent } from './adivina-pokemon.component';

describe('AdivinaPokemonComponent', () => {
  let component: AdivinaPokemonComponent;
  let fixture: ComponentFixture<AdivinaPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivinaPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdivinaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
