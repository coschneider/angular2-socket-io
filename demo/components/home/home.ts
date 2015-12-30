/// <reference path="../../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';

@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
})
export class HomeCmp {
  constructor() {
    this.connect();
  }
 /*
 * @param xxx
 * @returns return false to prevent default form submit behavior to refresh the page.
 */
  connect(): boolean {
    
    var socket = io.connect();

    socket.on('connect', () => { console.log('we are connected!'); });
    
    return false;
  }
}
