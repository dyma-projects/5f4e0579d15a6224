import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output('updateResult')
  public updateR : EventEmitter<number> = new EventEmitter();
  @Input()
  public result : number;

  constructor() { }

  ngOnInit() {
  }

  public updateResult(action : number) : void {
    this.updateR.emit(action);
  }

}
