import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  @Input() storeData: any;


  constructor(
  ) { }
}
