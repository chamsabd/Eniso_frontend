import { Component, TemplateRef } from '@angular/core';
import {  LocalDataSource } from 'ng2-smart-table';
import { ButtonViewComponent } from '../button-view.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from './showcase-dialog/showcase-dialog.component';



@Component({

  selector: 'ngx-smart-table',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss'],
})
export class MatiereComponent {
  source: LocalDataSource = new LocalDataSource();
  dep:string
  niveau:string
  data =[]
  matiere=[]
  prof={}
    constructor(private route: ActivatedRoute,private http: HttpClient,private dialogService: NbDialogService) {
      this.route.queryParamMap.subscribe(map => {
        this.dep = map.get('dep');
        this.niveau = map.get('niveau');
      });
     
       this.http.post("/api/modules/all",{
        "idDepartement":this.dep,
        "idNiveau": this.niveau
    }).subscribe(
      (response:any) => {
        // handle successful response
        this.data = response;
  
  
       this.data.forEach(item => {
          if (item.matieres) {
              item.matieres.forEach(matiere => {
                  matiere.module = item.nom; // Assuming "module" is the property you want to add
                  this.matiere.push(matiere)
                });
             
                  }
      });
      this.source.load(this.matiere);
     
        console.log(this.matiere);
        
      },
      (error) => {
        // handle error response
        console.error(error);
      }
    );
     
    }
  settings = {

    hideSubHeader: false,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },



    columns: {
      nom: {
        title: 'nom',
        type: 'string',
      },
      credit: {
        title: 'credit',
        type: 'number',
      },
      vh: {
        title: 'VH',
        type: 'number',
      },
    
      module: {
        title: 'Module',
        type: 'string',
      },
      Actions:{ 
      type: 'custom',
     
    valuePrepareFunction: (value, row, cell) => {
      // DATA FROM HERE GOES TO renderComponent
      return JSON.stringify({title:'Prof',class:"primary"}) ;
    },
      renderComponent: ButtonViewComponent,
      onComponentInitFunction:(instance,dialog: TemplateRef<any>)=> {
       
               instance.save.subscribe(row => {
       
                

          this.open2(row.prof);
          
        })
       
      
      },
      filter:false,
    },
    
    },
    actions: {
  
      add: true,
      edit: true,
      delete: true
    }
  };
  open2(prof:object) {
    console.log(prof);
  
    this.dialogService.open(ShowcaseDialogComponent
      ,
       { context:{prof:prof}  }
      );
  }
 

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
