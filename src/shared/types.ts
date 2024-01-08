export type VariableInfoType = {
  name: string;
  type: string[];
  value: string | number | boolean | null;
};

type errorElement = {
  message: string;
  domain: string;
  reason: string;
};

export interface NetworkError {
  code: number;
  message: string;
  errors?: errorElement[];
}
