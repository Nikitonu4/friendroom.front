import FrTabs from './FrTabs.vue';
import {Story} from '@storybook/vue3';

export default {
  title: 'Компоненты/Атомы/FrTabs',
  component: FrTabs,
  parameters: {
  },
  argTypes: {
    // options:{
    //   control: { type:  }
    // },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template: Story<any> = (args:any) => ({
  components: { FrTabs },
  setup() {
    return { args };
  },
  template: '<fr-tabs v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {
  options: [{
   label: 'Найти соседа',
   value: 'neighbour'
  },
  {
    label: 'Найти квартиру',
    value: 'flat',
  }
  ],
};
