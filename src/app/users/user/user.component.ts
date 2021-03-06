import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route : ActivatedRoute ) { }

  ngOnInit() {
  	this.user = {
  		id : this.route.snapshot.params['id'], 
  		name : this.route.snapshot.params['name'] 
  	};

  	//If the params are changed within the same componenent
  	this.route.params.subscribe( (param) => {
  		this.user.id = param["id"];
  		this.user.name = param["name"];
  	});
  }


}