import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Result } from 'src/app/interfaces/marvel.interface';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  title = 'marvelPage';

  events: string[] = [];
  opened: boolean = true;
  public selectedHero!: Result;
  public resultados: Result[] = [];
  public searchInput = new FormControl('');
  public codigoHeroe: number = 0;

  constructor(private marvelService: MarvelService) {}

  searchHeroe() {
    const value: string = this.searchInput.value || '';

    this.marvelService.searchHeroe(value).subscribe((resp) => {
      this.resultados = resp.data.results;
    });
  }

  onSelectedOption(param: MatAutocompleteSelectedEvent): void {
    if (!param.option.value) {
      return;
    }
    this.selectedHero = param.option.value;
    this.codigoHeroe = this.selectedHero.id;
    this.searchInput.setValue(param.option.value.name);
  }

  clearSearch() {
    this.searchInput.setValue('');
  }

  sideNavItems = [
    {
      label: 'Heroes',
      icon: 'circle',
      url: 'listado/0',
    },
    {
      label: 'Comics',
      icon: 'circle',
      url: 'comics/0',
    },
  ];
}
