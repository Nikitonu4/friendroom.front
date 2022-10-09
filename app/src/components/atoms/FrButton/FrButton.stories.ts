import FrButton from './FrButton.vue';
import { FrButtonProps } from './FrButton.interfaces';
import { Story } from '@storybook/vue3';

export default {
  title: 'Компоненты/Атомы/FrButton',
  component: FrButton,
  parameters: {},
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'select' },
      options: ['S', 'M', 'L'],
    },
    style: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template: Story<FrButtonProps> = (args: FrButtonProps) => ({
  components: { FrButton },
  setup() {
    return { args };
  },
  template: '<fr-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {
  label: 'Button',
  mainIcon: {
    name: '',
  },
  leftIcon: {
    name: '',
  },
  rightIcon: {
    name: '',
  },
};
