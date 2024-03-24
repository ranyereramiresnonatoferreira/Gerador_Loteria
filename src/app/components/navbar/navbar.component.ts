import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  items: MenuItem[] | undefined;
  
  ngOnInit(){
    this.items = [
      {
          label: 'Gerar Números',
          icon: 'pi pi-fw pi-power-off',
          routerLink: '/lotteries/generate-numbers'
      },
      {
        label: 'Ver Resultados',
        icon: 'pi pi-fw pi-power-off',
        routerLink: '/lotteries/view-result'
    }
  ]
  
  }

}