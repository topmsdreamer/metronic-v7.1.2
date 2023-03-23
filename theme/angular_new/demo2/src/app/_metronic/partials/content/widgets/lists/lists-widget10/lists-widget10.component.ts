import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-widget10',
  templateUrl: './lists-widget10.component.html',
})
export class ListsWidget10Component implements OnInit {
  constructor() { }
  @Input() cssClass: '';

  ngOnInit(): void { }
}
