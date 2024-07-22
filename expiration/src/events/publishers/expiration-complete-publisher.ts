import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@nkpctickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
