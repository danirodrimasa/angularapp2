import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xpanel',
  templateUrl: './xpanel.component.html',
  styleUrls: ['./xpanel.component.scss']
})
export class XpanelComponent implements OnInit {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
