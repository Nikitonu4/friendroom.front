import MainSearch from './MainSearch.vue';
import {Story} from '@storybook/vue3';

export default {
  title: 'Модули/MainSearch',
  component: MainSearch,
  parameters: {
  },
  argTypes: {
  },
};

const Template: Story<any> = (args:any) => ({
  components: { MainSearch },
  setup() {
    return { args };
  },
  template: '<main-search v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {
};
