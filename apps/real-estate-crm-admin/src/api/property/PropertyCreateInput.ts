import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { AgentAssignmentCreateNestedManyWithoutPropertiesInput } from "./AgentAssignmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  name?: string | null;
  address?: string | null;
  status?: Array<"Option1">;
  price?: number | null;
  agent?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutPropertiesInput;
};
