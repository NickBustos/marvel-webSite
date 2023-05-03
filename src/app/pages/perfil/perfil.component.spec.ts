import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PerfilComponent } from './perfil.component';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { MarvelService } from 'src/app/services/marvel.service';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilComponent],
      imports: [HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ page: 1 }),
          },
        },
        {
          provide: MarvelService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('No se creo el componente', () => {
    expect(component).toBeTruthy();
    console.log(component)
  });
});
