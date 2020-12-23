import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent  {
  @Input() store: any;
 
  constructor(
  ) { }

}
