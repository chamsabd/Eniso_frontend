import { Component } from '@angular/core';

import { MENU_ITEMS } from '../app-menu';

@Component({
  selector: 'ngx-tables',
  styleUrls: ['student-management.component.scss'],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class StudentManagmentComponent {
  menu = MENU_ITEMS;
}
