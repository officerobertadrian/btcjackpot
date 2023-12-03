import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonType: 'outlined' | 'raised' | null = null;
  @Input() buttonBackground: 'white' | 'red' | 'yellow' | 'light' | null = null;
  @Input() buttonText: string | null = null;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onClickButton() {
    this.onClick.emit(this.buttonText);
  }
}
