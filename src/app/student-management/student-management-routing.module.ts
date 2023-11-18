import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentManagmentComponent } from './student-management.component';
import { MatiereComponent } from './matiere/matiere.component';


const routes: Routes = [{
  path: '',
  component: StudentManagmentComponent,
  children: [
    { path: '', redirectTo: 'matiere', pathMatch: 'full' },
    {
      path: 'matiere',
      component: MatiereComponent,
    },
   
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentManagmentRoutingModule { }

export const routedComponents = [
  StudentManagmentComponent,
  MatiereComponent,
  
];
