import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-component-one',
  templateUrl: './sub-component-one.component.html',
  styleUrls: ['./sub-component-one.component.scss']
})
export class SubComponentOneComponent implements OnInit {
  items = ['sub-1-1', 'subb-2-2'];
  constructor() {}

  ngOnInit() {}
}