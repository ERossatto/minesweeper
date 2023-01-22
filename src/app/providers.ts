import { MyEventService } from './my-event/my-event.service';

export const appProviders = [
  { provide: 'MyEvent', useClass: MyEventService },
]
