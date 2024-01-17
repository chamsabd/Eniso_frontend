import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentManagmentComponent } from './student-management.component';
import { MatiereComponent } from './matiere/matiere.component';
import { ButtonViewComponent } from './button-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './department/department.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ShowcaseDialogComponent } from './matiere/showcase-dialog/showcase-dialog.component';


const routes: Routes = [{
  path: '',
  component: StudentManagmentComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
      path: 'matiere',
      component: MatiereComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'department',
      component: DepartmentComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
    }, ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentManagmentRoutingModule { }

export const routedComponents = [
  StudentManagmentComponent,
  MatiereComponent,
  ButtonViewComponent,
  DepartmentComponent,
  ShowcaseDialogComponent
];
