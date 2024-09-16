import { NgClass, NgIf } from '@angular/common';
import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
// import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = ''

  //1. Create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  //Optional 2nd argument of @ViewChild()
  //1. read: Use it to read the different token from the queried elements.
  //2. static: Determines when the query is resolved.
  //           True, is when the view is initialized (before the first change detection) for the first time.
  //           False, if you want it to be resolved after every change detection
  //eg:- @ViewChild('searchInput', {static: true}) searchInputEl: ElementRef;
  @ViewChild('searchInput') searchInputEl: ElementRef; //this searchInputEl will store the reference of the <input> element in the viewTemplate

  onSearchTextChanged(){
    // this.searchTextChanged.emit(this.searchText);
  }

  updateSearchText(){ //inputEl : HTMLInputElement
    //console.log(inputEl.value);
    // this.searchText = inputEl.value;
    this.searchText = this.searchInputEl.nativeElement.value;
    //this.searchText = event.target.value;
    this.searchTextChanged.emit(this.searchText);
  }

}
