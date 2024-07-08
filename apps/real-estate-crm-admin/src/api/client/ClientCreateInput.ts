import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  firstName?: string | null;
  phone?: string | null;
  lastName?: string | null;
  email?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
};
