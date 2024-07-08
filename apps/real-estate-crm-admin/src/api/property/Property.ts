import { Appointment } from "../appointment/Appointment";
import { AgentAssignment } from "../agentAssignment/AgentAssignment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  status?: Array<"Option1">;
  price: number | null;
  agent: string | null;
  appointments?: Array<Appointment>;
  agentAssignments?: Array<AgentAssignment>;
};
