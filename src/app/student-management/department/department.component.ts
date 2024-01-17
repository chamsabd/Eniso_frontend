import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
  data = [
      {id: 1,
      titre:"IA"
    },
    {id: 2,
      titre:"GM"
    },
    {id:3 ,
      titre:"EI"
    },
    {id:4 ,
      titre:"GMP"
    }];
    @ViewChild('item', { static: true }) accordion;

  constructor(private router: Router) {
   
   
  }

   onclick(dep:number,niveau:number){
    localStorage.setItem("dep",dep+"");
    switch (dep) {
      case 2:
        niveau=niveau+3
        break;
        case 3:
          niveau=niveau+6
        break;
        case 4:
          niveau=niveau+9
        break;
     
    }
    localStorage.setItem("niveau",niveau+"");
    this.router.navigate(['/student/matiere'], { queryParams: { dep: dep,niveau:niveau } });

    
  }
}
