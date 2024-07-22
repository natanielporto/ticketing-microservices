import { Subjects, Publisher, OrderCancelledEvent } from "@nkpctickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
