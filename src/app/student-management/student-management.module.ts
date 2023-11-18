import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../@theme/theme.module';
import { StudentManagmentRoutingModule, routedComponents } from './student-management-routing.module';


@NgModule({
  imports: [
    NbCardModule,
  
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
