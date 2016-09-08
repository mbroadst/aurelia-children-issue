import {inject} from 'aurelia-dependency-injection';
import {
  bindable,
  customElement,
  noView,
  processContent,
  ViewCompiler
} from 'aurelia-templating';

@noView
@processContent(false)
@customElement('my-list-element')
@inject(Element, ViewCompiler)
export class MyListElement {
  constructor(element, viewCompiler) {
    this.viewFactory =
      viewCompiler.compile(`<template>${element.innerHTML}</template>`);
    element.innerHTML = '';
  }
}
