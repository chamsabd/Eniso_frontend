import { Component } from '@angular/core';
import {  LocalDataSource } from 'ng2-smart-table';
import { ButtonViewComponent } from '../button-view.component';



@Component({

  selector: 'ngx-smart-table',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss'],
})
export class MatiereComponent {

  settings = {

   //  hideSubHeader: true,
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
      Actions:{ 
      type: 'custom',
   
    valuePrepareFunction: (value, row, cell) => {
      // DATA FROM HERE GOES TO renderComponent
      return JSON.stringify({title:'send',class:"primary"}) ;
    },
      renderComponent: ButtonViewComponent,
      onComponentInitFunction(instance) {
       
        
        instance.save.subscribe(row => {
          alert(`${row.id} saved!`)
        })
         
       
      },
      filter:false,
    },
    
    },
    actions: {
  
      add: false,
      edit: false,
      delete: false
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {
    const data = [{id: "a",
    firstName:"z",
    lastName: "e",
    username: "d",
    email: "x",
    age: "a"},{id: "a",
    firstName:"z",
    lastName: "e",
    username: "d",
    email: "x",
    age: "a"},{id: "a",
    firstName:"z",
    lastName: "e",
    username: "d",
    email: "x",
    age: "a"}];
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
