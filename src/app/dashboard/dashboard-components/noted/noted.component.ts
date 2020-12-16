import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-noted',
  templateUrl: './noted.component.html',
  styleUrls: ['./noted.component.scss']
})
export class NotedComponent implements OnInit {
  @Input() storeData: any;

  constructor() {
  }

  ngOnInit(): void {
    
  }

}
