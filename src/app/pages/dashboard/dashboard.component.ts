import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../shared/store';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	loading = true;
	constructor(
		public store: StoreService,
	) { }

	ngOnInit() {
		this.store.setLoginStatus().then(() => {
			this.loading = false;
		});
	}

}
