import { Component, Inject, Input, OnInit } from '@angular/core';
import { MyEvent } from '../my-event/my-event.interface';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() size: number;

  constructor(
    @Inject('MyEvent') public myEvent: MyEvent
  ) { }

  ngOnInit(): void {
  }

  public onClick(): void {
    this.myEvent.event.next(this.myEvent.counter)
    this.myEvent.counter++
  }

}
