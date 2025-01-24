import { Step } from "./forms";

export interface Config {
  forms: {
    enquire: {
      steps: Step[];
      defaultValues: Record<string, any>;
    };
  };
}
