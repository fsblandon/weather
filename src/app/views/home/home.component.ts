import { Component, OnInit } from '@angular/core';
import { CurrentService } from 'src/app/services/current.service';
import { ToastrService } from 'ngx-toastr';
import { NextService } from 'src/app/services/next.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CurrentService, NextService]
})
export class HomeComponent implements OnInit {

  city: string;
  current: any;
  currentCalled = false;
  next: any[];
  nextCalled = false;

  constructor(
    private currentService: CurrentService,
    private toastr: ToastrService,
    private nextService: NextService
  ) { }

  ngOnInit() {
  }

  searchCity() {
    this.currentService.getWeather(this.city).subscribe(
      (data) => {
        this.currentCalled = true;
        this.current = data;
      },
      (error) => {
        this.toastr.error(error.error.error.message, 'Select other city', {
          positionClass: 'toast-bottom-center'
        });
      }
    );
    this.currentCalled = false;
    this.nextService.getPredition(this.city).subscribe(
      (data) => {
        this.nextCalled = true;
        this.next = data;
      },
      (error) => {
        this.toastr.error(error.error.error.message, 'Select other city', {
          positionClass: 'toast-bottom-center'
        });
      }
    );
    this.nextCalled = false;
    this.city = '';
  }

}
