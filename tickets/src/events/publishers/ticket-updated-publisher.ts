import { Publisher, Subjects, TicketUpdatedEvent } from "@nkpctickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
