import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/model/user.model';
import { StoreService } from '../shared/store';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	storeData?: any;
	constructor(
		public store: StoreService,
	) { }
	ngOnInit() {
		this.store.setLoginStatus();
		this.storeData = this.store
	}

}
