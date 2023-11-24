import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../@theme/theme.module';
import { StudentManagmentRoutingModule, routedComponents } from './student-management-routing.module';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    StudentManagmentRoutingModule,
    Ng2SmartTableModule,
   
  ],
  declarations: [
    ...routedComponents,
   
  ],
})
export class StudentManagmentModule {
}
