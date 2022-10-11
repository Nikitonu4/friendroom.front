export interface FrToggleButtonProps {
  initValue: string;
  disabled?: boolean;
  options: {
    label: string;
    value: string;
  }[];
}
