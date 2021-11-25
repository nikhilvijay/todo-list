import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { popupState } from './state';
import { todo } from './type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showPop: any = popupState.close;

  todoCollection: todo[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getTodoList().subscribe((res) => (this.todoCollection = res.list));
  }

  popupControl(arg: any) {
    this.showPop = arg;
  }

  addItem(item: todo) {
    this.todoCollection.push(item);
  }
}
