import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'fa fa-fw fa-dashboard',
      },
      {
        label: 'Master',
        icon: 'fa fa-fw fa-image',
        items: [
          {
            label: 'link 1',
            icon: 'fa fa-fw fa-refresh',
            items: [
              { label: 'Link 1-1', icon: 'fa fa-fw fa-save' },
              { label: 'Link 1-2', icon: 'fa fa-fw fa-save' },
            ]
          },
          {
            label: 'Link 2',
            icon: 'fa fa-fw fa-phone',
            items: [
              { label: 'Link 2-1', icon: 'fa fa-fw fa-minus' }
            ]
          }
        ]
      },
      {
        label: 'Bill of Materials',
        icon: 'fa fa-fw fa-exclamation-triangle',
      },
      {
        label: 'Transactions',
        icon: 'fa fa-fw fa-transgender',
      }

    ];

  }

}
