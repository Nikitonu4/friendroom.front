import FrToggleButton from './FrToggleButton.vue';
import {Story} from '@storybook/vue3';

export default {
  title: 'Компоненты/Атомы/FrToggleButton',
  component: FrToggleButton,
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
  components: { FrToggleButton },
  setup() {
    return { args };
  },
  template: '<fr-toggle-button v-bind="args" />',
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
