import { Publisher, Subjects, TicketCreatedEvent } from "@nkpctickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
