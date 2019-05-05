import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DateAdapter } from "@angular/material/core";
import * as _moment from "moment";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { default as _rollupMoment } from "moment";

const moment = _rollupMoment || _moment;

@Component({
  selector: "app-date-picker-trial",
  templateUrl: "./date-picker-trial.component.html",
  styleUrls: ["./date-picker-trial.component.scss"]
})
export class DatePickerTrialComponent {
  events: string[] = [];

  @ViewChild('localeDatePicker') localeDatePicker: ElementRef;
  constructor(private adapter: DateAdapter<any>) {}

  addEvent(type: string, event: MatDatepickerInputEvent<_moment.Moment>) {
    // TIME IN HTML
    console.log("event.value.utc", event.value.utc().format());
    const timeHTML = new Date(event.value.utc().format()).getTime();
    console.log("time in html", timeHTML);
    const date = moment.utc().format();
    //NOW TIME
    const currentTime = new Date().getTime();
    console.log("currentTime", currentTime)
    console.log(date, "- now in UTC");
    const local = moment
      .utc(date)
      .local()
      .format();
    console.log(local, "- UTC now to local");

    const dateNow = new Date();
    console.log(dateNow.toUTCString(), "-now in Date toUTCString")
    console.log(dateNow.toString(), "-now in Date toString")
    this.events.push(`${type}: ${event.value}`);
  }

  setLocale() {
    this.adapter.setLocale(this.localeDatePicker.nativeElement.value);
  }

  resetEvents() {
    this.events = [];
  }
}
