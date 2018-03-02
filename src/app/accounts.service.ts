import { Injectable, EventEmitter, Output} from '@angular/core';

import { LoggingService } from './logging.service';

@Injectable()

export class AccountsService{

	constructor(private logger : LoggingService){ }

	accounts : { name : string, status : string} [] = [
		{
		  name: 'Master Account',
		  status: 'active'
		},
		{
		  name: 'Testaccount',
		  status: 'inactive'
		},
		{
		  name: 'Hidden Account',
		  status: 'unknown'
		}

	];

	@Output() emitStatus : EventEmitter<string> = new EventEmitter<string>();

	addAccount(name: string, status: string){
		this.accounts.push( {name : name, status : status});
		this.logger.logStatusChange(status);
	}

	updateStatus(id: number, newStatus: string){
		this.accounts[id].status = newStatus;
		this.logger.logStatusChange(newStatus);
	}
}