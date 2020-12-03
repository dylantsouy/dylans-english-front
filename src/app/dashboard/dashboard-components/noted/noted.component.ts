import { Component, OnInit } from '@angular/core';
import { Noted, noteds } from './noted-data';

@Component({
  selector: 'app-noted',
  templateUrl: './noted.component.html',
  styleUrls: ['./noted.component.scss']
})
export class NotedComponent implements OnInit {

  notedsData: Noted[];

  constructor() {

    this.notedsData = noteds;
  }

  ngOnInit(): void {
  }

}
