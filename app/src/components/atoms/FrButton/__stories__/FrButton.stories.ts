import FrButton from '../FrButton.vue';
import mdx from './FrButton.mdx';

export default {
  title: 'Компоненты/Атомы/FrButton',
  component: FrButton,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['S', 'M', 'L'],
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args: Record<string, unknown>) => ({
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
};
