import {
  Component,
  Renderer2,
  ElementRef,
  AfterContentChecked,
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements AfterContentChecked {
  //@ViewChild('visualizador') visualizador: ElementRef | undefined;

  constructor(private renderer: Renderer2, private ref: ElementRef) {}
  ngAfterContentChecked(): void {
    const alturaListado = this.ref.nativeElement.querySelector(
      'router-outlet + app-listado'
    );

    console.log(alturaListado);
  }

  AfterViewChecked() {
    console.log('hola');
  }

  events: string[] = [];
  opened: boolean = true;
  sideNavItems = [
    {
      label: 'Listado',
      icon: 'circle',
      url: 'listado',
    },
    {
      label: 'label',
      icon: 'label',
      url: 'perfil',
    },
    {
      label: 'label',
      icon: 'label',
      url: '',
    },
  ];
}
