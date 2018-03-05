import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
//  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'ServerName';
  username = '';
  constructor() {
    if (this.username === '') {
      this.allowNewServer = false;
    } else {
      this.allowNewServer = true;
    }
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  clearUserName(){
    this.username = '';
  }

}