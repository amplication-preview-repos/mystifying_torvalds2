import { Property } from "../property/Property";

export type AgentAssignment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  agent: string | null;
  property?: Property | null;
};
