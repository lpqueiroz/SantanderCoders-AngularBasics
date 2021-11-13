import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('parentDataOut') parentData!: string;
  childProp: string = 'Propriedade do componente filho';

  @Output() clickEvtFired = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickEvtFired.emit(this.childProp);
  }

}
