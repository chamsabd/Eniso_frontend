import { Component } from '@angular/core';

@Component({
  selector: 'ngx-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
  constructor() {
    const data = [
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
   
  }
}
