import { Component, Input, OnInit } from '@angular/core';
import { todoState } from '../state';
import { todo } from '../type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input('data') todoCollection: todo[] = [];

  constructor() {}

  ngOnInit(): void {}

  changeState(arg: number) {
    if (this.todoCollection[arg]['state'] == todoState.incomplete)
      this.todoCollection[arg]['state'] = todoState.completed;
    else this.todoCollection[arg]['state'] = todoState.incomplete;
  }
}
