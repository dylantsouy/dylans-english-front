import { Component, AfterViewChecked, Input } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartEvent } from 'ng-chartist';
import { StoreService } from '../../../shared/store';

export interface Chart {
	type: string;
	data: Chartist.IChartistData;
	options?: any;
	responsiveOptions?: any;
	events?: ChartEvent;
}

@Component({
	selector: 'app-level',
	templateUrl: './level.component.html',
	styleUrls: ['./level.component.scss']
})
export class LevelComponent implements AfterViewChecked {
	@Input() storeData: any;
	donuteChart1: Chart = this.store.level || {
		type: 'Pie',
		data: {
			series: [
				0,
				0,
				0,
				0,
				0,
				100
			]
		},
		options: {
			donut: true,
			height: 260,
			showLabel: false,
			donutWidth: 20
		}
	};
	constructor(
		public store: StoreService
	) { }

	ngAfterViewChecked(): void {
		this.donuteChart1 = this.storeData.level
	}
}
