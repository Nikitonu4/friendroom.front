import FrTabs from './FrTabs.vue';
import { Story } from '@storybook/vue3';
import { FrTabsProps } from 'components/atoms/FrTabs/FrTabs.interfaces';

export default {
  title: 'Компоненты/Атомы/FrTabs',
  component: FrTabs,
  parameters: {},
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template: Story<FrTabsProps> = (args: FrTabsProps) => ({
  components: { FrTabs },
  setup() {
    return { args };
  },
  template: '<fr-tabs v-bind="args" @value="console.log($event.target.value)" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {
  initValue: 'flat',
  options: [
    {
      label: 'Найти соседа',
      value: 'roommate',
    },
    {
      label: 'Найти квартиру',
      value: 'flat',
    },
  ],
};
