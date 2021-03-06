import {Component} from 'angular2/core';

@Component({
  selector: 'gestures-demo',
  templateUrl: 'demo-app/gestures/gestures-demo.html',
  styleUrls: ['demo-app/gestures/gestures-demo.css'],
  directives: []
})
export class GesturesDemo {
  dragCount: number = 0;
  pressCount: number = 0;
  swipeCount: number = 0;
}
