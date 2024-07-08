import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { AgentAssignmentUpdateManyWithoutPropertiesInput } from "./AgentAssignmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  name?: string | null;
  address?: string | null;
  status?: Array<"Option1">;
  price?: number | null;
  agent?: string | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  agentAssignments?: AgentAssignmentUpdateManyWithoutPropertiesInput;
};
