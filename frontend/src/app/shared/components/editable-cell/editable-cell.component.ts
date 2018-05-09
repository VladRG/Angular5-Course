import { Component, OnInit, Input } from '@angular/core';
import { BaseEntity } from '@app/models';

@Component({
  selector: 'app-editable-cell',
  templateUrl: './editable-cell.component.html',
  styleUrls: ['./editable-cell.component.css']
})
export class EditableCellComponent implements OnInit {

  constructor() { }

  @Input()
  element: BaseEntity;

  @Input()
  property: string;

  ngOnInit() { }

  edit() {
    this.element.editing = !this.element.editing;
  }
}
