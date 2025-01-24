export interface Step {
  id: string;
  fields: Field[];
}

export interface Field {
  name: string;
  label: string;
  type?: string;
  validation?: Record<string, any>;
  errors: Record<string, string>;
}
