export interface Step {
  id: string;
  fields: Field[];
}

export interface Field {
  name: string;
  label: string;
  errors: Record<string, string>;
}
