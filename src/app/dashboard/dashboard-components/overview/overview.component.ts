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
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements AfterViewChecked {
	@Input() storeData: any;
	barChart1: Chart = this.store.overview || {
		type: 'Bar',
		data: {
			labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
			series: [[0, 0, 0, 0, 0, 0]]
		},
		options: {
			seriesBarDistance: 100,
			high: 1000,

			axisX: {
				showGrid: false,
				offset: 10
			},
			axisY: {
				showGrid: true,
				offset: 40
			},
			height: 360
		},

		responsiveOptions: [
			[
				'screen and (min-width: 640px)',
				{
					axisX: {
						labelInterpolationFnc: function (value: number, index: number): string {
							return index % 1 === 0 ? `${value}` : '';
						}
					}
				}
			]
		]
	};


	constructor(
		public store: StoreService
		) { }

		ngAfterViewChecked(): void {
			this.barChart1 = this.storeData.overview
		}

}
