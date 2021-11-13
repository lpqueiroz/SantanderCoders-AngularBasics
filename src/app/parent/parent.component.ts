import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentPropriedade: string = "Propriedade do Componente Pai";
  childData: any;

  constructor() { }

  ngOnInit(): void {
  }

  onClickEvtFired(childData: any) {
    console.log(childData);
    this.childData = childData;
  }

}
