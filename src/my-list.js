import {children} from 'aurelia-templating';

export class MyList {
  @children('my-list-element') rows = [];

  attached() {
    console.log('children: ', this.rows);
  }
}