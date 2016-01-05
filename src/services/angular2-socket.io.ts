import { Injectable } from 'angular2/core';
import * as Rx from 'rxjs/Rx';

declare var io;

@Injectable()
export class NgSocketIO {
  socket: any;
  
  constructor() {
    this.socket = io.connect();
  }
  
  public on(event : string) {
    return Rx.Observable.fromEvent(this.socket, event);
  }
}
