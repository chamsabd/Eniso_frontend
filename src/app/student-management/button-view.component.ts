import { ViewCell } from 'ng2-smart-table';

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  template: `
  <button nbButton outline (click)="onClick()" [status]="btn.class">{{btn.title}}</button>
  `,
})
export class ButtonViewComponent implements ViewCell,OnInit {
  renderValue: string;
btn:any;
  @Input() value: string ;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {

    this.btn=JSON.parse(this.value);
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}