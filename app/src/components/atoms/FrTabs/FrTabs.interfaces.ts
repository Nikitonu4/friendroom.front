export interface FrTabsProps {
  initValue: string,
  disabled?: boolean;
  options: {
    label: string,
    value: string,
  }[],
}
