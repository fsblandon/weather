import { Component, OnInit, Input } from '@angular/core';
import { Current } from 'src/app/models/current';
import { Condition } from 'src/app/models/condition';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {

  @Input() current: any;

  currentCity: Current = new Current();
  condition: Condition = new Condition();

  constructor() { }

  ngOnInit() {
    this.currentCity.name = this.current.location.name;
    this.currentCity.localtime = this.current.location.localtime;
    this.currentCity.condition = this.current.current.condition;
    this.currentCity.tempc = this.current.current.temp_c;
    this.currentCity.precipin = this.current.current.precip_in * 100;
    this.currentCity.humidity = this.current.current.humidity;
    this.currentCity.windmph = this.current.current.wind_mph;
  }

}
