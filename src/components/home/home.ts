import { Component } from 'angular2/core';
import { Injectable } from 'angular2/core';
import { NgSocketIO } from '../../services/angular2-socket.io';

declare var io;

@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  providers: [NgSocketIO]
})

@Injectable()
export class HomeCmp {
  
  constructor(ngSocketIO : NgSocketIO) {
    ngSocketIO.on('connect').subscribe(() => { console.log('we are connected!'); });
  }
}
