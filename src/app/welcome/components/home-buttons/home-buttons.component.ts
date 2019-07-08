import { Component } from '@angular/core';

@Component({
  template: `
    <div class="buttons-container">
      <a [routerLink]="'emprendedor'" mat-button>
        Emprendedor
      </a>
      <a [routerLink]="'investigador'" mat-button>
        Investigador
      </a>
      <a [routerLink]="'empresario'" mat-button>
        Empresario
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=y350gZPm_mI"
        mat-button
      >
        Video Cinotam
      </a>
      <a [routerLink]="'convocatorias'" mat-button>
        Convocatorias
      </a>
    </div>
  `,
  styleUrls: ['./home-buttons.component.scss'],
  selector: 'app-home-buttons'
})
export class HomeButtonsComponent {}
