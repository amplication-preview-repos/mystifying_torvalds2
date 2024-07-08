import { Appointment } from "../appointment/Appointment";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  phone: string | null;
  lastName: string | null;
  email: string | null;
  appointments?: Array<Appointment>;
};
