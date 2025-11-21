export interface IPropsButton {
  layout?: 'primary' | 'secondary';
  isDisabled?: boolean;
  type?: 'button' | 'submit';
}

export interface IPropsInput {
  modelValue: string;
  isDisabled?: boolean;
  placeholder?: string;
}

export interface IPropsField {
  label?: string;
}

export interface IPropsSelect {
  modelValue: string;
  isDisabled?: boolean;
  options: string[];
}

export interface IEmit {
  'update:modelValue': [value: string];
}
