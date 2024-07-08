import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  firstName?: string | null;
  phone?: string | null;
  lastName?: string | null;
  email?: string | null;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
};
