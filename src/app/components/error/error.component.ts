import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../shared/store';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {


  constructor(
    public store: StoreService,
  ) { }

  ngOnInit(): void {
    this.store.getUser()
  }
}
