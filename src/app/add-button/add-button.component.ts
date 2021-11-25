import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { popupState } from '../state';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent implements OnInit {
  @Output() openPopup: any = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  showPopup() {
    this.openPopup.emit(popupState.open);
  }
}
