import { NgStyle } from '@angular/common';
import { Component, input, Input, NgModule, EventEmitter, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NgStyle, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @Input()
  all: number=0;

  @Input()
  inStock: number=0;

  @Input()
  outOfStock: number=0;

  @Output()
  selectedFilteredRadioButtonChanged : EventEmitter<string> = new EventEmitter<string>();

  selectedFilteredRadioButton: string = 'all';

  onSelectedFilteredRadioButtonChanged(){
    console.log(this.selectedFilteredRadioButton);
    this.selectedFilteredRadioButtonChanged.emit(this.selectedFilteredRadioButton);
  }

}
