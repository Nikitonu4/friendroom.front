import MainSearch from './MainSearch.vue';
import { Story } from '@storybook/vue3';

export default {
  title: 'Модули/MainSearch',
  component: MainSearch,
  parameters: {},
  argTypes: {},
};

const Template: Story<never> = (args: never) => ({
  components: { MainSearch },
  setup() {
    return { args };
  },
  template: '<main-search v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
