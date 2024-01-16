import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbButtonModule, NbMenuModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../@theme/theme.module';
import { StudentManagmentRoutingModule, routedComponents } from './student-management-routing.module';

import { DepartmentComponent } from './department/department.component';

import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    StudentManagmentRoutingModule,
    Ng2SmartTableModule,
   
  ],
  declarations: [
    ...routedComponents,
    DepartmentComponent,
   
  ],
})
export class StudentManagmentModule {
}
