import { Component, Inject, OnInit } from '@angular/core';
import { MyEvent } from '../my-event/my-event.interface';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {

  public log: number;

  constructor(
    @Inject('MyEvent') public myEvent: MyEvent
  ) { }

  ngOnInit(): void {
    this._initLogger()
  }

  private _initLogger(): void {
    this.myEvent.event.subscribe({
      next: (data: number) => this.log = data
    })
  }

}
