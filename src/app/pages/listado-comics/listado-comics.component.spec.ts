import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoComicsComponent } from './listado-comics.component';

describe('ListadoComicsComponent', () => {
  let component: ListadoComicsComponent;
  let fixture: ComponentFixture<ListadoComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoComicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
