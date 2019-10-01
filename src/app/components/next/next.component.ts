import { Component, OnInit, Input } from '@angular/core';
import { Next } from 'src/app/models/next';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit {

  @Input() next: any;

  days: any[] = [];
  mark = false;
  predictions: Next[] = [];

  constructor() { }

  ngOnInit() {
    this.days = this.next.forecast.forecastday;

    this.days.forEach(d => {
      if (d.date === this.next.current.last_updated.split(' ')[0]) {
        this.mark = true;
      }
      this.predictions.push({
        date: d.date,
        condition: d.day.condition,
        maxtempc: d.day.maxtemp_c,
        mintempc: d.day.mintemp_c
      });
    });
  }

}
