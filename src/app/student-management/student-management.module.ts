import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbButtonModule, NbMenuModule, NbAccordionModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../@theme/theme.module';
import { StudentManagmentRoutingModule, routedComponents } from './student-management-routing.module';


import { DashboardModule } from './dashboard/dashboard.module';

import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ShowcaseDialogComponent } from './matiere/showcase-dialog/showcase-dialog.component';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbAccordionModule,
    NbInputModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    StudentManagmentRoutingModule,
    Ng2SmartTableModule,
   
    MiscellaneousModule,
  ],
  declarations: [
    ...routedComponents,
  
   
  ],
})
export class StudentManagmentModule {
}
