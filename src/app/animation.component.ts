import { Component, ViewChild } from '@angular/core';
import { CSVRecord } from './CSVModel';
import { DataService } from './data.service';

@Component({
  selector: 'animation',
  templateUrl: './animation.component.html',
  styles: [`
  h1 { font-family: Lato; }
  
  `]
})
export class AnimationComponent {

  hasAnimationStarted: boolean;
  hasAnimationCompleted: boolean;

  options: any = {
    prefix: 'Staff ID ',
    duration: 11,
    separator: ''
  };
  endVal: number;

  staffIdentifier: string;
  staffName: string;

  constructor(private dataService: DataService) {

  }

  doSomethingOnComplete() {
    console.log(this.dataService.data);
    this.hasAnimationCompleted = true;
  }

  start() {
    this.endVal = undefined;
    this.staffIdentifier = undefined;
    this.staffName = undefined;
    this.hasAnimationStarted = false;
    this.hasAnimationCompleted = false;
    if (this.dataService.data && this.dataService.data.length > 0) {
      const min = 5;
      const max = (this.dataService.data.length) - 1;
      const randomInt = this.getRandomInt(min, max);
      this.staffIdentifier = this.dataService.data[randomInt].staffIdentifier;
      this.staffName = this.dataService.data[randomInt].staffName;
      this.endVal = this.dataService.data[randomInt].staffIdentifier;
      this.hasAnimationStarted = true;
    } else {
      console.log('No data loaded');
      alert('No file uploaded. Please upload participants.csv');
    }
  }

  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * The value is no lower than min (or the next integer greater than min
   * if min isn't an integer) and no greater than max (or the next integer
   * lower than max if max isn't an integer).
   * Using Math.round() will give you a non-uniform distribution!
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   */
  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
