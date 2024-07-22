import { PaymentCreatedEvent, Publisher, Subjects } from "@nkpctickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
