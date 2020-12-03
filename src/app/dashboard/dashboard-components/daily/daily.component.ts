import { Component, OnInit } from '@angular/core';
import { Daily, dailys } from './daily-data';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  dailyData: Daily[];

  constructor() {

    this.dailyData = dailys;
  }


  ngOnInit(): void {
  }

}
