import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoComponent } from './listado.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { PagesModule } from '../pages.module';

describe('ListadoComponent', () => {
  let component: ListadoComponent;
  let fixture: ComponentFixture<ListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserModule, HttpClientModule, PagesModule],
      declarations: [
        { ListadoComponent },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ page: 1 }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe ser creado', () => {
    expect(component).toBeTruthy();
  });
});
