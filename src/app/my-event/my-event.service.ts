import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MyEvent } from './my-event.interface'

@Injectable()
export class MyEventService implements MyEvent {
  public event: Subject<number> = new Subject()
  
  public counter = 0
}
