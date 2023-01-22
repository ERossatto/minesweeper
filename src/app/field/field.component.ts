import { Component, Inject, OnInit } from '@angular/core';
import { MyEvent } from '../my-event/my-event.interface';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  constructor(
    @Inject('MyEvent') public myEvent: MyEvent
  ) { }

  ngOnInit(): void {
  }

  private counter: number = 1
  public onClick(): void {
    this.myEvent.event.next(this.counter)
    this.counter++
  }

}
