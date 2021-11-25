import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { popupState, todoState } from '../state';
import { todo } from '../type';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Output() addItem = new EventEmitter<todo>();
  @Output() closePopup = new EventEmitter<any>();

  newItem = new FormGroup({
    itemValue: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.addItem.emit({
      item: this.newItem.value.itemValue,
      state: todoState.incomplete,
    });
    this.close();
  }

  close() {
    this.closePopup.emit(popupState.close);
  }
}
