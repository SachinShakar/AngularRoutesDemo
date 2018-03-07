import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route : ActivatedRoute) { }

  ngOnInit() {
  	//console.log(typeof(0 + this.route.snapshot.params["id"]), this.route.snapshot.params["id"]);
    this.server = this.serversService.getServer(Number.parseInt(this.route.snapshot.params["id"]));

    this.route.params.subscribe( (param) => {
    	this.server = this.serversService.getServer(Number.parseInt(param["id"]));
    });
  }

}
