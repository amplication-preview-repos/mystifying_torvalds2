import { Property } from "../property/Property";
import { Client } from "../client/Client";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  time: Date | null;
  property?: Property | null;
  client?: Client | null;
};
